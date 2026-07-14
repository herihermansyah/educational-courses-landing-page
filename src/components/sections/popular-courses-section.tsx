"use client";
import React from "react";
import WrapperMain from "../wrapper-main";
import Image from "next/image";
import Button from "../ui/button";
import {Variants, motion} from "motion/react";
import SubHeader from "../ui/sub-header";

const coursesData = Array.from({length: 4}).map(() => ({
  title: "product management basic-courses",
  description:
    "Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia.",
  price: 380,
  image:
    "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}));

const menuProgram = [
  {name: "all program"},
  {name: "UI/UX design"},
  {name: "program design"},
  {name: "program design"},
  {name: "program design"},
  {name: "program design"},
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

const cardVariants: Variants = {
  hidden: {opacity: 0, y: 50},
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

const PopularCoursesCection = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.2}}
    >
      <WrapperMain className="flex flex-col gap-15">
        {/* title line and category */}
        <SubHeader title="popular courses">
          <div className="flex items-center flex-wrap justify-center gap-6">
            {menuProgram.map((item, index) => (
              <motion.div variants={cardVariants} key={index}>
                <Button color="secondary" className="capitalize">
                  {item.name}
                </Button>
              </motion.div>
            ))}
          </div>
        </SubHeader>
        {/* card course */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coursesData.map((item, index) => (
            <motion.div
              variants={cardVariants}
              className="flex flex-col gap-6 bg-white shadow-effect rounded-[14px] overflow-hidden"
              key={index}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={334}
                height={179}
                className="w-full"
              />
              <div className="flex flex-col gap-8 px-4 pb-5.5">
                <div className="flex flex-col gap-1">
                  <h3 className="text-[15px] font-extrabold text-teal-900 leading-[150%]">
                    {item.title}
                  </h3>
                  <p className="text-[10px] text-gray-400 leading-[150%]">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <h5 className="text-orange-900 font-bold text-[15px]">
                    {item.price.toLocaleString("en-US", {
                      currency: "USD",
                      style: "currency",
                    })}
                  </h5>
                  <Button color="secondary">Book Now</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </WrapperMain>
    </motion.section>
  );
};

export default PopularCoursesCection;
