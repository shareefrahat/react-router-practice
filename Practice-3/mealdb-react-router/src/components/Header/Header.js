import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-yellow-500 py-5 text-black">
      <nav className="flex flex-row justify-center gap-5 text-xl font-bold ">
        <Link className="hover:text-green-800" to="/">
          Home
        </Link>

        <Link className="hover:text-green-800" to="/restaurant">
          Restaurant
        </Link>
        <Link className="hover:text-green-800" to="/about">
          About
        </Link>
        <Link className="hover:text-green-800" to="/contact">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
