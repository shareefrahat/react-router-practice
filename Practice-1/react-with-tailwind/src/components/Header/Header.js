import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Header = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/blog", name: "Blog" },
    { id: 3, path: "/about", name: "About" },
    { id: 4, path: "/contact", name: "Contact" },
  ];
  return (
    <header className="bg-red-100">
      <div
        onClick={() => setOpen(!open)}
        className="w-8 text-blue-700 md:hidden"
      >
        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
      </div>
      <ul
        className={`   ${
          open
            ? "flex flex-col justify-center gap-5 py-5"
            : "hidden md:flex md:flex-row md:justify-center md:gap-10 md:py-5"
        }`}
      >
        {links.map((link) => (
          <li key={link.id}>
            <a
              className="text-blue-600 text-xl hover:text-red-700"
              href={link.path}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
