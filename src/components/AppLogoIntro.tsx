import { useEffect, useRef, useState, type RefObject } from "react";

const LOGO_SRC = "/images/gf-training-logo10.png";
const MIN_SPLASH_MS = 450;
const MOVE_DURATION_MS = 900;
const OVERLAY_FADE_MS = 850;

const getSplashLogoHeight = () => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  if (w >= 768) return Math.min(h * 0.28, 280);
  if (w >= 640) return Math.min(h * 0.26, 220);
  return Math.min(h * 0.24, 180);
};

type LogoPosition = {
  left: number;
  top: number;
  height: number;
};

type IntroPhase = "splash" | "animating" | "done";

type AppLogoIntroProps = {
  navLogoRef: RefObject<HTMLImageElement>;
  onComplete?: () => void;
};

const AppLogoIntro = ({ navLogoRef, onComplete }: AppLogoIntroProps) => {
  const [phase, setPhase] = useState<IntroPhase>("splash");
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [logoPos, setLogoPos] = useState<LogoPosition>(() => ({
    left: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
    top: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
    height: typeof window !== "undefined" ? getSplashLogoHeight() : 200,
  }));
  const [animating, setAnimating] = useState(false);
  const finishedRef = useRef(false);

  const introActive = phase !== "done";

  const finishIntro = () => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    onComplete?.();
    requestAnimationFrame(() => {
      setPhase("done");
      document.body.style.overflow = "";
    });
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOverlayVisible(false);
      finishIntro();
      return;
    }

    let cancelled = false;
    const timers: number[] = [];
    const schedule = (fn: () => void, ms: number) => {
      timers.push(window.setTimeout(fn, ms));
    };

    document.body.style.overflow = "hidden";

    const preloadLogo = () =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => resolve();
        img.src = LOGO_SRC;
      });

    const waitForPageLoad = () =>
      new Promise<void>((resolve) => {
        if (document.readyState === "complete") resolve();
        else window.addEventListener("load", () => resolve(), { once: true });
      });

    const wait = (ms: number) => new Promise<void>((resolve) => schedule(() => resolve(), ms));

    const measureTarget = (): LogoPosition | null => {
      const target = navLogoRef.current;
      if (!target) return null;
      const rect = target.getBoundingClientRect();
      return {
        left: rect.left + rect.width / 2,
        top: rect.top + rect.height / 2,
        height: rect.height,
      };
    };

    const run = async () => {
      await Promise.all([preloadLogo(), waitForPageLoad(), wait(MIN_SPLASH_MS)]);
      if (cancelled) return;

      await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
      await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));

      const splashHeight = getSplashLogoHeight();
      setLogoPos({
        left: window.innerWidth / 2,
        top: window.innerHeight / 2,
        height: splashHeight,
      });

      const endPos = measureTarget();
      if (!endPos) {
        setOverlayVisible(false);
        finishIntro();
        return;
      }

      setPhase("animating");
      requestAnimationFrame(() => {
        if (cancelled) return;
        setAnimating(true);
        setLogoPos(endPos);
      });

      schedule(() => {
        if (cancelled) return;
        setOverlayVisible(false);
      }, 120);

      // Fallback if transitionend doesn't fire
      schedule(() => {
        if (cancelled) return;
        finishIntro();
      }, MOVE_DURATION_MS + 150);
    };

    run();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, [navLogoRef, onComplete]);

  const handleTransitionEnd = (e: React.TransitionEvent<HTMLImageElement>) => {
    if (!animating || e.target !== e.currentTarget) return;
    if (e.propertyName === "left" || e.propertyName === "top" || e.propertyName === "height") {
      finishIntro();
    }
  };

  if (!introActive) return null;

  return (
    <div className="fixed inset-0 z-[200] pointer-events-none" aria-hidden="true">
      <div
        className="absolute bg-background will-change-[opacity,transform,filter]"
        style={{
          inset: "-12%",
          opacity: overlayVisible ? 1 : 0,
          transform: overlayVisible ? "scale(1)" : "scale(1.14)",
          filter: overlayVisible ? "blur(0px)" : "blur(18px)",
          transition: [
            `opacity ${OVERLAY_FADE_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`,
            `transform ${OVERLAY_FADE_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`,
            `filter ${OVERLAY_FADE_MS}ms ease-out`,
          ].join(", "),
        }}
      />
      <img
        src={LOGO_SRC}
        alt=""
        onTransitionEnd={handleTransitionEnd}
        className="fixed w-auto will-change-[left,top,height]"
        style={{
          left: logoPos.left,
          top: logoPos.top,
          height: logoPos.height,
          transform: "translate(-50%, -50%)",
          transition: animating
            ? `left ${MOVE_DURATION_MS}ms cubic-bezier(0.65, 0, 0.35, 1), top ${MOVE_DURATION_MS}ms cubic-bezier(0.65, 0, 0.35, 1), height ${MOVE_DURATION_MS}ms cubic-bezier(0.65, 0, 0.35, 1)`
            : "none",
          zIndex: 201,
        }}
      />
    </div>
  );
};

export default AppLogoIntro;
