"use client";
import React from "react";
import WrapperMain from "../wrapper-main";
import Button from "../ui/button";
import Image from "next/image";
import SpiralPath from "@/assets/spiral-path";
import CalenderIcon from "@/assets/calender-icon";
import CartIcon from "@/assets/cart-icon";
import {motion, Variants} from "motion/react";

// container animation
const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// item animation

const itemVariants: Variants = {
  hidden: {opacity: 0, y: 30},
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

// floating animation
const floatingVariants = (yDelta: number, duration: number): Variants => ({
  hidden: {opacity: 0, y: 0.5},
  visible: {
    opacity: 1,
    scale: 1,
    y: [0, yDelta, 0],
    transition: {
      opacity: {duration: 0.5},
      scale: {type: "spring", stiffness: 100},
      y: {
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },
});

const HeroSection = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      id="home"
      className="bg-teal-100 pt-10 md:pt-45 relative overflow-hidden"
    >
      <WrapperMain className="grid grid-cols-1 lg:grid-cols-2">
        {/* text hero */}
        <motion.div className="flex flex-col gap-4 pb-5 md:pb-45 items-start relative z-20">
          <motion.span
            variants={itemVariants}
            className="bg-white text-[14px] p-2 rounded-lg font-medium text-teal-900"
          >
            Never Stop learning
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-[48px] leading-14 md:text-[64px] md:leading-19 font-bold text-teal-900 md:w-172"
          >
            Grow up your skills by online courses with Onlearning
          </motion.h2>
          <motion.div variants={itemVariants} className="opacity-0">
            <Button color="tertiary" size={"large"}>
              EXPLORE PATH
            </Button>
          </motion.div>
        </motion.div>
        {/* image hero */}
        <div className="self-end relative">
          <motion.div
            initial={{opacity: 0, scale: 0.95, y: 50}}
            animate={{opacity: 1, scale: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.3, ease: "easeOut"}}
          >
            <Image
              src={"/image-hero.svg"}
              alt="hero image"
              width={896}
              height={723}
              className="object-contain"
              priority
            />
          </motion.div>
          {/* absolute icon and asset */}
          <motion.div
            variants={floatingVariants(-5, 3)}
            initial="hidden"
            animate="visible"
            className="absolute top-50 -translate-y-1/2 -left-25 translate-x-1/2 bg-white/50 rounded-xl p-2 w-fit"
          >
            <div className="flex items-center gap-5">
              <CalenderIcon />
              <p className="font-semibold text-teal-500 capitalize">
                assisten student
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={floatingVariants(-5, 3.5)}
            initial="hidden"
            animate="visible"
          >
            <CartIcon className="absolute -top-90 -right-20 -translate-x-1/2" />
          </motion.div>
        </div>
      </WrapperMain>
      {/* absolute asset */}
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1.2, delay: 0.5}}
      >
        <SpiralPath className="absolute top-0 left-1/2 -translate-x-1/2" />
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
