import { useEffect } from "react";

const GetApp = () => {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

    // iOS detection
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      window.location.href = "https://apps.apple.com/es/app/gf-training/id6499074966";
      return;
    }

    // Android detection
    if (/android/i.test(userAgent)) {
      window.location.href = "https://play.google.com/store/apps/details?id=com.kahunas.io.GFTraining&hl=en";
      return;
    }

    // Fallback for desktop or unknown devices - redirect to app landing page
    window.location.href = "/app";
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mb-4"></div>
      <h1 className="text-xl font-bold mb-2">Augnablik...</h1>
      <p className="text-foreground/60">Finnum réttu verslunina fyrir þig.</p>
    </div>
  );
};

export default GetApp;

