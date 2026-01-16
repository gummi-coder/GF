import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AppRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Detect device type
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    
    // iOS detection
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
    
    // Android detection
    const isAndroid = /android/i.test(userAgent);

    // App Store URLs
    const appStoreUrl = "https://apps.apple.com/es/app/gf-training/id6499074966";
    const playStoreUrl = "https://play.google.com/store/apps/details?id=com.kahunas.io.GFTraining&hl=en";

    if (isIOS) {
      window.location.href = appStoreUrl;
    } else if (isAndroid) {
      window.location.href = playStoreUrl;
    } else {
      // Desktop or unknown device - show options or redirect to app landing page
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        <p className="text-foreground/70">Beinum á appverslunina...</p>
      </div>
    </div>
  );
};

export default AppRedirect;

