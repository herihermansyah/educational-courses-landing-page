import {cn} from "@/lib/utils";
import React from "react";

const menuHeader = [
  {name: "home", href: "#home"},
  {name: "coureses", href: "#courses"},
  {name: "benefit", href: "#benefit"},
  {name: "bundles", href: "#bundles"},
];

interface MenuHeaderProps {
  className?: string;
}

const MenuHeader = ({className}: MenuHeaderProps) => {
  return (
    <nav>
      <ul
        className={cn(
          "flex flex-col gap-8 lg:flex-row items-center lg:gap-20",
          className,
        )}
      >
        {menuHeader.map((item) => (
          <li key={item.name}>
            <a
              className={cn(
                "text-[18px] text-teal-900 font-medium capitalize hover:text-orange-900 hover:font-bold",
                "transition-all duration-300 ease-in-out",
              )}
              href={item.href}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuHeader;
