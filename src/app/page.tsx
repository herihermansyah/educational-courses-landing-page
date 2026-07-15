import CategoryCoursesSection from "@/components/sections/category-courses-section";
import HeroSection from "@/components/sections/hero-section";
import PopularCoursesCection from "@/components/sections/popular-courses-section";
import StaffTrainingSection from "@/components/sections/staff-training-section";
import StudentBenefitSection from "@/components/sections/student-benefit-section";
import React from "react";

const page = () => {
  return (
    <div className="mt-6 mb-50 flex flex-col gap-30">
      <HeroSection />
      <PopularCoursesCection />
      <CategoryCoursesSection />
      <StudentBenefitSection />
      <StaffTrainingSection />
    </div>
  );
};

export default page;
