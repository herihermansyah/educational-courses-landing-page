import {cn} from "@/lib/utils";
import React from "react";

interface SubHeaderProps {
  className?: string;
  children?: React.ReactNode;
  title: string;
}

const SubHeader = ({className, children, title}: SubHeaderProps) => {
  return (
    <div className="flex flex-col gap-10 items-center">
      <h2
        className={cn(
          "capitalize font-bold text-[64px] leading-15.5 text-orange-900 text-center",
          className,
        )}
      >
        {title}
      </h2>
      <div>{children}</div>
    </div>
  );
};

export default SubHeader;
