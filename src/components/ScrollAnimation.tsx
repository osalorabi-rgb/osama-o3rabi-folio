import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const ScrollAnimation = ({ 
  children, 
  delay = 0, 
  direction = "up" 
}: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directionVariants = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        ...directionVariants[direction],
        scale: 0.95,
        filter: "blur(4px)"
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        x: 0,
        scale: 1,
        filter: "blur(0px)"
      } : {}}
      transition={{
        duration: 1,
        delay,
        ease: [0.16, 1, 0.3, 1],
        filter: { duration: 0.6 }
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
