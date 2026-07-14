"use client";
import Logo from "@/components/logo";
import MenuHeader from "@/components/menu-header";
import Button from "@/components/ui/button";
import UserControl from "@/components/user-control";
import WrapperMain from "@/components/wrapper-main";
import {cn} from "@/lib/utils";
import React from "react";
import {HiMenuAlt3} from "react-icons/hi";
import {MdCloseFullscreen} from "react-icons/md";
import {AnimatePresence, motion, Variants} from "motion/react";

// defining variants menu for animaiton
const menuVariants: Variants = {
  open: {
    y: "65%",
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  closed: {
    y: "-100%",
    opacity: 0,
    scale: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}}>
      <WrapperMain className="relative z-2">
        <div className="flex items-center justify-between bg-teal-100 py-5 px-10 rounded-2xl">
          <Logo />
          {/* style responsive menu header mobile and desktop */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate={
              typeof window !== "undefined" && isOpen ? "open" : "closed"
            }
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "absolute left-1/2 -translate-x-1/2 -z-1",
              "bg-teal-100 w-full py-10",
              "rounded-2xl",
              "flex flex-col items-center gap-10",
              "lg:static lg:w-auto lg:bg-transparent lg:translate-y-0 lg:py-0 lg:left-0 lg:translate-x-0 lg:z-0",
            )}
          >
            <MenuHeader />
            <UserControl className="lg:hidden" />
          </motion.div>
          <UserControl className="hidden lg:flex" />
          <Button
            onClick={() => setIsOpen(!isOpen)}
            color="secondary"
            className="flex lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isOpen ? "close" : "menu"}
                initial={{opacity: 0, rotate: -90, scale: 0.8}}
                animate={{opacity: 1, rotate: 0, scale: 1}}
                exit={{opacity: 0, rotate: 90, scale: 0.8}}
                transition={{duration: 0.2}}
              >
                {isOpen ? (
                  <MdCloseFullscreen size={24} />
                ) : (
                  <HiMenuAlt3 size={24} />
                )}
              </motion.span>
            </AnimatePresence>
          </Button>
        </div>
      </WrapperMain>
    </motion.div>
  );
};

export default Header;
