import {cn} from "@/lib/utils";
import React from "react";

type WrapperMainTypes = {
  className?: string;
  children?: React.ReactNode;
};

const WrapperMain = ({className, children, ...props}: WrapperMainTypes) => {
  return (
    <div
      {...props}
      className={cn("container mx-auto xl:w-main px-4 xl:px-0", className)}
    >
      {children}
    </div>
  );
};

export default WrapperMain;
