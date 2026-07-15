"use client";
import React from "react";
import WrapperMain from "../wrapper-main";
import SubHeader from "../ui/sub-header";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCards, Mousewheel} from "swiper/modules";
import Image from "next/image";
import {motion, Variants} from "motion/react";
import "swiper/css";
import "swiper/css/effect-cards";

const bundlersFirst = [
  {
    id: 1,
    name: "javascript",
    image:
      "https://images.unsplash.com/photo-1649180556628-9ba704115795?q=80&w=1162&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "react js",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "next js",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "tailwind css",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1055&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "typescript",
    image:
      "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "nodejs",
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "html css",
    image:
      "https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    name: "git & github",
    image:
      "https://images.unsplash.com/photo-1654277041218-84424c78f0ae?q=80&w=1162&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    name: "ui ux design",
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    name: "web performance",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: {opacity: 0, y: -50, scale: 0.8},
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      delay: index * 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
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

const BundlersCoursesSection = () => {
  const middleIndex = Math.floor(bundlersFirst.length / 2);
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.2}}
    >
      <WrapperMain className="flex flex-col gap-15">
        <SubHeader title="Exclusive Bundles" className="text-teal-900">
          <motion.p
            variants={itemVariants}
            className="text-center text-gray-300 text-[20px] md:w-180"
          >
            Onlearing is one powerful online software suite that combines all
            the tools needed to run a successful school or office.
          </motion.p>
        </SubHeader>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-15 xl:grid-cols-3">
          {/* first card */}
          <motion.div variants={itemVariants}>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Mousewheel]}
              mousewheel={{forceToAxis: true}}
              initialSlide={middleIndex}
              className="w-60 h-80 md:w-70 md:h-100"
            >
              {bundlersFirst.map((item, index) => (
                <SwiperSlide
                  key={item.id}
                  className="relative overflow-hidden rounded-2xl"
                >
                  {({isActive}) => (
                    <motion.div
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      custom={index}
                      className="w-full h-full relative"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover w-full h-full"
                      />
                      <motion.div
                        className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex items-end p-6 w-full"
                        animate={{opacity: isActive ? 1 : 0.2}}
                      >
                        <h3 className="text-white font-bold text-lg uppercase">
                          {item.name}
                        </h3>
                      </motion.div>
                    </motion.div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
          {/* second card */}
          <motion.div variants={itemVariants}>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Mousewheel]}
              mousewheel={{forceToAxis: true}}
              initialSlide={middleIndex}
              className="w-60 h-80 md:w-70 md:h-100"
            >
              {bundlersFirst.map((item, index) => (
                <SwiperSlide
                  key={item.id}
                  className="relative overflow-hidden rounded-2xl"
                >
                  {({isActive}) => (
                    <motion.div
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      custom={index}
                      className="w-full h-full relative"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover w-full h-full"
                      />
                      <motion.div
                        className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex items-end p-6 w-full"
                        animate={{opacity: isActive ? 1 : 0.2}}
                      >
                        <h3 className="text-white font-bold text-lg uppercase">
                          {item.name}
                        </h3>
                      </motion.div>
                    </motion.div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
          {/* third card */}
          <motion.div variants={itemVariants}>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Mousewheel]}
              mousewheel={{forceToAxis: true}}
              initialSlide={middleIndex}
              className="w-60 h-80 md:w-70 md:h-100"
            >
              {bundlersFirst.map((item, index) => (
                <SwiperSlide
                  key={item.id}
                  className="relative overflow-hidden rounded-2xl"
                >
                  {({isActive}) => (
                    <motion.div
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      custom={index}
                      className="w-full h-full relative"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover w-full h-full"
                      />
                      <motion.div
                        className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex items-end p-6 w-full"
                        animate={{opacity: isActive ? 1 : 0.2}}
                      >
                        <h3 className="text-white font-bold text-lg uppercase">
                          {item.name}
                        </h3>
                      </motion.div>
                    </motion.div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </WrapperMain>
    </motion.section>
  );
};

export default BundlersCoursesSection;
