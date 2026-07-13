import Logo from "@/components/logo";
import MenuHeader from "@/components/menu-header";
import UserControl from "@/components/user-control";
import WrapperMain from "@/components/wrapper-main";
import React from "react";

const Header = () => {
  return (
    <div className="bg-amber-100 py-5">
      <WrapperMain className="flex items-center justify-between">
        <Logo />
        <MenuHeader />
        <UserControl />
      </WrapperMain>
    </div>
  );
};

export default Header;
