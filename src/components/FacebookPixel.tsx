import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
    _fbq: any;
  }
}

const FacebookPixel = () => {
  const location = useLocation();
  const pixelId = import.meta.env.VITE_FACEBOOK_PIXEL_ID;

  useEffect(() => {
    if (!pixelId) {
      console.warn('Facebook Pixel ID not found. Set VITE_FACEBOOK_PIXEL_ID in your .env file');
      return;
    }

    // Initialize Facebook Pixel
    if (!window.fbq) {
      (function(f: any, b: any, e: string, v: string, n?: any, t?: any, s?: any) {
        if (f.fbq) return;
        n = f.fbq = function(...args: any[]) {
          n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

      window.fbq('init', pixelId);
      window.fbq('track', 'PageView');
    }
  }, []);

  // Track page views on route changes
  useEffect(() => {
    if (window.fbq && pixelId) {
      window.fbq('track', 'PageView');
    }
  }, [location.pathname, pixelId]);

  return null;
};

// Helper function to track custom events (call this from anywhere in your app)
export const trackFacebookEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (window.fbq) {
    window.fbq('track', eventName, eventData);
  }
};

export default FacebookPixel;
