import React from "react";

const menuHeader = [
  {name: "home", href: "#home"},
  {name: "careers", href: "#careers"},
  {name: "blog", href: "#blog"},
  {name: "about us", href: "#about"},
];

const MenuHeader = () => {
  return (
    <nav>
      <ul className="flex items-center gap-20">
        {menuHeader.map((item) => (
          <li key={item.name}>
            <a
              className="text-[18px] text-blue-950 font-medium capitalize"
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
