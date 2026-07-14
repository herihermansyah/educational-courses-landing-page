import HeroSection from "@/components/sections/hero-section";
import PopularCoursesCection from "@/components/sections/popular-courses-section";
import React from "react";

const page = () => {
  return (
    <div className="mt-6 mb-50 flex flex-col gap-30">
      <HeroSection />
      <PopularCoursesCection />
    </div>
  );
};

export default page;
