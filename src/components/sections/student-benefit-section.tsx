"use client";
import React from "react";
import WrapperMain from "../wrapper-main";
import {BiSolidDashboard} from "react-icons/bi";
import {LiaNewspaper} from "react-icons/lia";
import {BsPeopleFill} from "react-icons/bs";
import {cn} from "@/lib/utils";
import Image from "next/image";
import SpiralPath from "@/assets/spiral-path";
import {Variants, motion} from "motion/react";

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

const imageSertication = [
  {id: 1, image: "/sertifikat1.svg", name: "sertification"},
  {id: 2, image: "/sertifikat1.svg", name: "sertification"},
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

const benefitVariants: Variants = {
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

const StudentBenefitSection = () => {
  return (
    <motion.section
      id="benefit"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.3}}
    >
      <WrapperMain className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* text benefit */}
        <div className="flex flex-col gap-11">
          <div className="flex flex-col gap-6">
            <motion.p
              variants={benefitVariants}
              className="px-7 py-2 w-fit rounded-md text-[18px] text-teal-900 font-medium capitalize bg-gray-200"
            >
              benefits
            </motion.p>
            <motion.h3
              variants={benefitVariants}
              className="font-bold text-[48px] leading-16 text-teal-900"
            >
              Get Student ID Card
            </motion.h3>
          </div>
          <div className="flex flex-col gap-8">
            {benefitFeatures.map((item) => (
              <motion.div
                variants={benefitVariants}
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
        {/* image sertification */}
        <motion.div
          variants={benefitVariants}
          className="relative z-2 flex overflow-hidden items-center flex-wrap lg:flex-nowrap justify-center gap-4 bg-teal-100 px-19 py-10 rounded-2xl"
        >
          {imageSertication.map((item) => (
            <motion.div
              variants={benefitVariants}
              key={item.id}
              className="relative z-2 w-53 h-86"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
          <SpiralPath className="absolute -z-1 top-0 left-1/2 -translate-x-1/2" />
        </motion.div>
      </WrapperMain>
    </motion.section>
  );
};

export default StudentBenefitSection;
