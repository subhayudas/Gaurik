import * as motion from "motion/react-client";
export default function CloseIcon({ className }: { className?: string }) {
  return (
    <div className={`relative size-5 ${className}`}>
      <motion.div
        className="absolute top-1/2 left-0 h-0.5 w-full bg-current origin-center rotate-45"
        variants={{
          initial: {
            scaleX: 1,
          },
          whileHover: {
            scaleX: 0.8,
          },
        }}
        transition={{
          ease: [0.24, 0.43, 0.15, 0.97],
          duration: 0.4,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-0 h-0.5 w-full bg-current origin-center -rotate-45"
        variants={{
          initial: {
            scaleX: 1,
          },
          whileHover: {
            scaleX: 0.8,
          },
        }}
        transition={{
          ease: [0.24, 0.43, 0.15, 0.97],
          duration: 0.4,
          delay: 0.1,
        }}
      />
    </div>
  );
}
