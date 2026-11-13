import { useEffect } from "react";

export function useAutoScroll(
  ref: React.RefObject<HTMLElement | null>,
  pxPerSecond = 40,
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let last = performance.now();
    let pos = el.scrollLeft; // float position; scrollLeft alone can round away slow speeds
    let paused = false;
    let resumeTimer: ReturnType<typeof setTimeout>;

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      const half = el.scrollWidth / 2;

      if (paused || half <= el.clientWidth) {
        pos = el.scrollLeft; // follow the user's manual scrolling
      } else {
        pos += pxPerSecond * dt;
        if (pos >= half) pos -= half; // jump back to the identical first copy
        el.scrollLeft = pos;
      }
      raf = requestAnimationFrame(tick);
    };

    const pause = () => {
      clearTimeout(resumeTimer);
      paused = true;
    };
    const resume = (delay = 0) => {
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => (paused = false), delay);
    };

    const onEnter = (e: PointerEvent) => e.pointerType === "mouse" && pause();
    const onLeave = (e: PointerEvent) => e.pointerType === "mouse" && resume();
    const onTouchEnd = () => resume(2500); // let momentum scrolling settle

    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    el.addEventListener("focusin", pause);
    el.addEventListener("focusout", () => resume());

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resumeTimer);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("focusin", pause);
      el.removeEventListener("focusout", () => resume());
    };
  }, [ref, pxPerSecond]);
}
