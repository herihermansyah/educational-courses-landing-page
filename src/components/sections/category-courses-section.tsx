"use client";
import React from "react";
import WrapperMain from "../wrapper-main";
import SubHeader from "../ui/sub-header";
import Image from "next/image";
import Button from "../ui/button";
import {motion, Variants} from "motion/react";

const coursesData = Array.from({length: 6}).map(() => ({
  title: "beauty",
  description: "One powerful online software suite that combines",
  image:
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}));

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

const CategoryCoursesSection = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.2}}
    >
      <WrapperMain className="flex flex-col gap-15">
        <SubHeader title="Courses Category" className="text-teal-900">
          <motion.p
            variants={cardVariants}
            className="text-center text-gray-300 text-[20px] sm:w-180"
          >
            Onlearing is one powerful online software suite that combines all
            the tools needed to run a successful school or office.
          </motion.p>
        </SubHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coursesData.map((item, index) => (
            <motion.div
              variants={cardVariants}
              className="flex flex-col items-center gap-10 bg-white shadow-effect rounded-[14px] overflow-hidden"
              key={index}
            >
              <div className="w-20 h-20 relative rounded-full overflow-hidden mt-10">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col text-center gap-5 px-4 pb-5.5">
                <div className="flex flex-col gap-1">
                  <h3 className="text-[18px] font-extrabold text-orange-900 leading-[150%]">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-gray-400 leading-[150%]">
                    {item.description}
                  </p>
                </div>
                <Button color="primary">Book Now</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </WrapperMain>
    </motion.section>
  );
};

export default CategoryCoursesSection;
