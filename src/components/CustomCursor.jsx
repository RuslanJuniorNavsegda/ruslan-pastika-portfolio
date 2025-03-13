import { useState, useEffect } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: isHovered ? 0.1 : 0.3,
        ease: "power2.out",
      });
    };

    const hoverElements = document.querySelectorAll(
      "a, button, .portfolio-item"
    );
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => setIsHovered(true));
      el.addEventListener("mouseleave", () => setIsHovered(false));
    });

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", () => setIsHovered(true));
        el.removeEventListener("mouseleave", () => setIsHovered(false));
      });
    };
  }, [isHovered]);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isHovered ? "hover" : ""}`}
    />
  );
}
