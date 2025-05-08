import { MotionProps } from "motion/react";
import * as motion from "motion/react-client";

// Define a custom type for the variants that includes fill property
interface CustomVariants {
  initial?: { fill?: string };
  animate?: { fill?: string };
}

type LogoFullProps = MotionProps & {
  className?: string;
  variants?: CustomVariants;
};

export default function LogoFull(props: LogoFullProps) {
  // Extract the fill colors or use default white
  const initialColor = props.variants?.initial?.fill || "#FFFFFF";
  const animateColor = props.variants?.animate?.fill || initialColor;

  return (
    <motion.div
      {...props}
      className={`flex items-center ${props.className || ""}`}
      initial={{ color: initialColor }}
      animate={{ color: animateColor }}
      transition={{
        duration: 0.6,
        ease: [0.24, 0.43, 0.15, 0.97],
      }}
    >
      <span className="text-3xl font-semibold tracking-widest md:text-4xl">GAURIK</span>
      <span className="ml-2 text-base font-light tracking-wider md:text-lg">GROUP</span>
    </motion.div>
  );
}
