import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "How it Works", href: "/how-it-works" },
    { name: "Company", href: "#company", hasDropdown: true },
    { name: "Fjarþjálfun", href: "/pricing" },
  ];

  const companyDropdownItems = [
    { name: "Um Okkur", href: "/about" },
    { name: "Hafa samband", href: "/contact" },
  ];

  return (
    <nav className="fixed top-6 left-8 right-8 z-50">
      <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl px-8 max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="text-2xl font-black tracking-tight uppercase font-display">
              GF<span className="text-primary">Training</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.name === "Company" ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger className="text-white/90 hover:text-white transition-colors font-medium text-sm flex items-center gap-1 font-sans">
                    {link.name}
                    <ChevronDown size={16} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-card border border-border/20 backdrop-blur-sm">
                    {companyDropdownItems.map((item) => (
                      <DropdownMenuItem key={item.name} asChild>
                        <Link
                          to={item.href}
                          className="text-foreground hover:text-primary transition-colors cursor-pointer"
                        >
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : link.href.startsWith('/') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-white/90 hover:text-white transition-colors font-medium text-sm flex items-center gap-1 font-sans"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/90 hover:text-white transition-colors font-medium text-sm flex items-center gap-1 font-sans"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-3 rounded-md uppercase text-sm tracking-wide"
              onClick={() => window.location.href = 'http://localhost:8082/apply'}
            >
              APPLY NOW
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 space-y-4 animate-fade-in">
            {navLinks.map((link) => (
              link.name === "Company" ? (
                <div key={link.name} className="space-y-2">
                  <div className="text-white/90 font-medium py-2 font-sans">
                    {link.name}
                  </div>
                  <div className="pl-4 space-y-2">
                    {companyDropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block text-white/70 hover:text-white transition-colors font-medium py-1 font-sans text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : link.href.startsWith('/') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-white/90 hover:text-white transition-colors font-medium py-2 font-sans"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-white/90 hover:text-white transition-colors font-medium py-2 font-sans"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            ))}
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 rounded-md uppercase"
              onClick={() => window.location.href = 'http://localhost:8082/apply'}
            >
              APPLY NOW
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
