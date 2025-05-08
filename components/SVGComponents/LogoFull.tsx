import { MotionProps } from "motion/react";
import * as motion from "motion/react-client";
type LogoFullProps = MotionProps & {
  className?: string;
};
export default function LogoFull(props: LogoFullProps) {
  return (
    <motion.div
      {...props}
      className={`flex items-center ${props.className || ""}`}
      initial={{ color: props.variants?.initial?.fill || "#FFFFFF" }}
      animate={{ color: props.variants?.animate?.fill || props.variants?.initial?.fill || "#FFFFFF" }}
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
