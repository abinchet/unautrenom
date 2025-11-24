import React, { useEffect, useState } from "react";

const ScrollProgress = ({ hideOnMobile = true }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || window.pageYOffset;
      const scrollHeight = doc.scrollHeight - window.innerHeight;
      const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", requestTick, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", requestTick);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className={`scroll-progress ${
        hideOnMobile ? "scroll-progress--hide-sm" : ""
      }`}
      aria-hidden="true"
    >
      <div
        className="scroll-progress__bar"
        style={{
          height: `${progress}%`,
          top: 0,
          bottom: "auto",
          transformOrigin: "top",
          transition: "none",
        }}
      />
    </div>
  );
};

export default ScrollProgress;
