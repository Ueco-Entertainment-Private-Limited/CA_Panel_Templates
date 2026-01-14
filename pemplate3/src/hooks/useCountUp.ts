// hooks/useCountUp.ts
import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring, animate } from "framer-motion";

export function useCountUp(target: number | string, duration = 1.5) {
  const numericTarget =
    typeof target === "string"
      ? parseFloat(target.replace("+", "").trim())
      : target;

  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 20,
    stiffness: 100,
  });

  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (inView) {
      animate(motionValue, numericTarget, { duration });
    }
  }, [inView, motionValue, numericTarget, duration]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      const value = Math.round(latest);
      setDisplayValue(
        typeof target === "string" && target.includes("+")
          ? `${value}+`
          : `${value}`
      );
    });

    return () => unsubscribe();
  }, [springValue, target]);

  return { ref, displayValue };
}
