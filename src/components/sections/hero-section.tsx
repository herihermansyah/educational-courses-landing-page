import React from "react";
import WrapperMain from "../wrapper-main";
import Button from "../ui/button";
import Image from "next/image";
import SpiralPath from "@/assets/spiral-path";
import CalenderIcon from "@/assets/calender-icon";
import CartIcon from "@/assets/cart-icon";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="bg-teal-100 pt-10 md:pt-30 relative overflow-hidden"
    >
      <WrapperMain className="flex flex-col xl:flex-row xl:items-center xl:justify-between ">
        {/* text hero */}
        <div className="flex flex-col gap-4 pb-5 md:pb-30 items-start relative z-20">
          <span className="bg-white text-[14px] p-2 rounded-lg font-medium text-teal-900">
            Never Stop learning
          </span>
          <h2 className="text-[48px] leading-14 md:text-[64px] md:leading-19 font-bold text-teal-900 md:w-172">
            Grow up your skills by online courses with Onlearning
          </h2>
          <Button color="tertiary" size={"large"}>
            EXPLORE PATH
          </Button>
        </div>
        {/* image hero */}
        <div className="self-end relative">
          <Image
            src={"/image-hero.svg"}
            alt="hero image"
            width={896}
            height={723}
            className="object-contain"
            priority
          />
          {/* absolute icon and asset */}
          <div className="absolute top-50 -translate-y-1/2 -left-25 translate-x-1/2 bg-white/50 rounded-xl p-2 w-fit">
            <div className="flex items-center gap-5">
              <CalenderIcon />
              <p className="font-semibold text-teal-500 capitalize">
                assisten student
              </p>
            </div>
          </div>
          <CartIcon className="absolute -top-10 -right-20 -translate-x-1/2" />
        </div>
      </WrapperMain>
      {/* absolute asset */}
      <SpiralPath className="absolute top-0 left-1/2 -translate-x-1/2" />
    </section>
  );
};

export default HeroSection;
