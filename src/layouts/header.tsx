"use client";
import Logo from "@/components/logo";
import MenuHeader from "@/components/menu-header";
import Button from "@/components/ui/button";
import UserControl from "@/components/user-control";
import WrapperMain from "@/components/wrapper-main";
import {cn} from "@/lib/utils";
import React from "react";
import {HiMenuAlt3} from "react-icons/hi";
import {MdCloseFullscreen} from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <WrapperMain className="relative z-2">
        <div className="flex items-center justify-between bg-teal-100 py-5 px-10 rounded-2xl">
          <Logo />
          {/* style responsive menu header mobile and desktop */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "absolute left-1/2 -translate-x-1/2 -z-1",
              "bg-teal-100 w-full py-10",
              "rounded-2xl",
              "flex flex-col items-center gap-10",
              isOpen ? "translate-y-58" : "-translate-y-full",
              "transition-all duration-500 ease-in-out",
              "lg:static lg:w-auto lg:bg-transparent lg:translate-y-0 lg:py-0 lg:left-0 lg:translate-x-0 lg:z-0",
            )}
          >
            <MenuHeader />
            <UserControl className="lg:hidden" />
          </div>
          <UserControl className="hidden lg:flex" />
          <Button
            onClick={() => setIsOpen(!isOpen)}
            color="secondary"
            className="flex lg:hidden"
          >
            {isOpen ? (
              <MdCloseFullscreen size={24} />
            ) : (
              <HiMenuAlt3 size={24} />
            )}
          </Button>
        </div>
      </WrapperMain>
    </div>
  );
};

export default Header;
