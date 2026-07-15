"use client";
import React from "react";
import {motion, Variants} from "motion/react";
import WrapperMain from "../wrapper-main";
import Image from "next/image";
import {BiSolidDashboard} from "react-icons/bi";
import {LiaNewspaper} from "react-icons/lia";
import {BsPeopleFill} from "react-icons/bs";
import {cn} from "@/lib/utils";

const benefitFeatures = [
  {
    id: 1,
    icon: <BiSolidDashboard />,
    description:
      "Teachers don’t get lost in the grid view and have a dedicated Podium space.",
  },
  {
    id: 2,
    icon: <LiaNewspaper />,
    description: "TA’s and presenters can be moved to the front of the class.",
  },
  {
    id: 3,
    icon: <BsPeopleFill />,
    description:
      "Teachers can easily see all students and class data at one time.",
  },
];

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

const staffVariants: Variants = {
  hidden: {opacity: 0, y: 50},
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

const StaffTrainingSection = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.3}}
    >
      <WrapperMain className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* image sertification */}
        <motion.div
          variants={staffVariants}
          className="relative z-2 aspect-square"
        >
          <Image
            src={"/pana.svg"}
            alt={"staff training"}
            fill
            className="object-contain"
          />
        </motion.div>
        {/* text staff */}
        <div className="flex flex-col gap-11">
          <div className="flex flex-col gap-6">
            <motion.p
              variants={staffVariants}
              className="px-7 py-2 w-fit rounded-md text-[18px] text-teal-900 font-medium capitalize bg-gray-300"
            >
              training
            </motion.p>
            <motion.h3
              variants={staffVariants}
              className="font-bold text-[48px] leading-16 text-orange-900"
            >
              Staff Training
            </motion.h3>
          </div>
          <div className="flex flex-col gap-8">
            {benefitFeatures.map((item) => (
              <motion.div
                variants={staffVariants}
                key={item.id}
                className="flex items-center gap-8"
              >
                <div
                  className={cn(
                    "text-[26px] p-4 rounded-full bg-gray-100 shadow-effect",
                    item.id % 2 === 0 ? "text-orange-900" : "text-teal-900",
                  )}
                >
                  {item.icon}
                </div>
                <p className="text-[18px] leading-[180%] font-medium text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </WrapperMain>
    </motion.section>
  );
};

export default StaffTrainingSection;
