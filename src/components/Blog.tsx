import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      title: "How to *Guarantee* You'll Never Change Your Body Composition",
      excerpt: "In these articles, we talk a lot about what you can do to transform your body composition — this time, we're talking about 3 things that will ensure you never build...",
      category: "Muscles",
      readTime: "3 min read",
    },
    {
      title: "How to Pack Your Workouts into Shorter Sessions",
      excerpt: "If you're struggling to fit your workouts into a busy schedule, you can start by cutting time from your workouts themselves. In this guide we'll cover how to pack m...",
      category: "Muscles",
      readTime: "3 min read",
    },
    {
      title: "Quick Guide to Full Body Workouts",
      excerpt: "Want to save time in your workouts and see better, more sustainable results? Full body strength workouts are a great way to do it; let's see how to get started!",
      category: "Muscles",
      readTime: "3 min read",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-black font-display">
            Top <span className="text-primary">Content</span>
          </h2>
          <Button variant="ghost" className="text-primary hover:text-primary/80 font-bold">
            view more <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {articles.map((article, i) => (
            <Card key={i} className="bg-card border-border hover:border-primary/50 transition-all hover:scale-105 cursor-pointer">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-secondary to-muted" />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 hover:text-primary transition-colors font-display">
                    {article.title}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-4 line-clamp-3 font-sans">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-primary font-semibold">{article.category}</span>
                    <span className="text-foreground/60">{article.readTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="ghost" className="text-primary hover:text-primary/80 font-bold text-lg">
            view more <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
