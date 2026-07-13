import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="w-46 h-10">
      <Image src="/logo.svg" alt="logo" width={182} height={38} />
    </Link>
  );
};

export default Logo;
