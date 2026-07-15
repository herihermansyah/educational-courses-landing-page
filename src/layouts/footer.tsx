"use client"
import ContactInfo from "@/components/contact-info";
import Logo from "@/components/logo";
import NewsLetter from "@/components/news-letter";
import WrapperMain from "@/components/wrapper-main";
import React from "react";
import {motion, Variants} from "motion/react";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: -50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const Footer = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-teal-100 py-10 sm:py-30 rounded-t-4xl"
    >
      <WrapperMain className="grid grid-cols-1 gap-y-20 md:grid-cols-2">
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-5 sm:w-75"
        >
          <Logo />
          <ContactInfo />
        </motion.div>
        <motion.div variants={itemVariants}>
          <NewsLetter />
        </motion.div>
      </WrapperMain>
    </motion.div>
  );
};

export default Footer;
