import React from "react";
import Button from "./ui/button";
import {cn} from "@/lib/utils";

interface UserControl {
  className?: string;
}

const UserControl = ({className}: UserControl) => {
  return (
    <div className={cn("flex items-center gap-8", className)}>
      <Button>LOG IN</Button>
      <Button color="secondary">SIGN UP</Button>
    </div>
  );
};

export default UserControl;
