"use client";
import cn from "@/utils/cn";
import { MotionProps } from "motion/react";
import * as motion from "motion/react-client";

export default function AnimatedBurger(
  props: MotionProps & { className?: string },
) {
  // const childVariants = {
  //   initial: {
  //     x: "0%",
  //   },
  //   whileHover: {
  //     x: "100%",
  //   },
  // };
  const childVariants = {
    initial: {
      scaleX: 1,
    },
    whileHover: {
      scaleX: 0.7,
    },
  };
  return (
    <>
      <motion.div
        className={cn("flex h-4 w-7 flex-col justify-between", props.className)}
      >
        <motion.div
          className="h-0.5 w-full bg-current"
          variants={childVariants}
          transition={{ duration: 0.5, delay: 0 }}
          style={{ originX: 0 }}
        />
        <motion.div
          className="h-0.5 w-full bg-current"
          variants={childVariants}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ originX: 0 }}
        />
        <motion.div
          className="h-0.5 w-full bg-current"
          variants={childVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ originX: 0 }}
        />
      </motion.div>
    </>
  );
}
