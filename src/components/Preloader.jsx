import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Preloader() {
  const preloaderRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => (preloaderRef.current.style.display = "none"),
    });

    tl.to(preloaderRef.current, {
      opacity: 0,
      duration: 0.5,
      delay: 2,
    });
  }, []);

  return (
    <div ref={preloaderRef} className="preloader">
      <div className="preloader-spinner">
        <div className="spinner-particle"></div>
        <div className="spinner-particle"></div>
        <div className="spinner-particle"></div>
      </div>
    </div>
  );
}
