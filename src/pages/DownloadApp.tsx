import { useEffect } from "react";

const DownloadApp = () => {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

    // iOS detection
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      window.location.href = "https://apps.apple.com/es/app/gf-training/id6499074966";
    } 
    // Android detection
    else if (/android/i.test(userAgent)) {
      window.location.href = "https://play.google.com/store/apps/details?id=com.kahunas.io.GFTraining&hl=en";
    } 
    // Fallback (Desktop or unknown) -> Go to App Landing Page
    else {
      window.location.href = "/app";
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center space-y-4">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto"></div>
        <p>Opna app store...</p>
      </div>
    </div>
  );
};

export default DownloadApp;

