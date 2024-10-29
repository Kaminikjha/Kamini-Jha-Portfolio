// import { RiCloseLine} from "@remixicon/react";
import React, { useState } from "react";
// import { RiMenu2Line} from "@remixicon/react";

import { RiMenu3Fill } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenue, setShowmenu] = useState(true);

  return (
    <>
      <nav className=" flex flex-wrap justify-between md:items-center text-white px-10 py-6  md:px-20">
        <span className=" bg-[#465697] rounded-xl px-4 py-2 hover:opacity-95 duration-300 hover:scale-105  text-xl lg:text-2xl font-bold tracking-wide"> Portfolio </span>

        <ul
          className={`${
            menu ? "block" : "hidden"
          }             mx-24 py-2 mt-4 font-semibold  md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
        >
          <a href="#About">
            <li className=" hover:opacity-95 hover:scale-105 transition-colors p-1 md:p-0 ">
              About
            </li>
          </a>
          <a href="#Experience">
            <li className=" hover:opacity-95 hover:scale-105 transition-colors p-1 md:p-0 ">
              Experience
            </li>
          </a>
          <a href="#Projects">
            <li className="  hover:opacity-95 hover:scale-105 transition-colors text-md p-1 md:p-0 ">
              Projects
            </li>
          </a>
          <a href="#Footer">
            <li className=" hover:opacity-95 hover:scale-105 transition-colors text-md p-1 md:p-0 ">
              Contact
            </li>
          </a>
        </ul>

        {showMenue ? (
          <RiMenu3Fill
            size={30}
            className=" md:hidden absolute right-10 top-6  transition-all duration-300"
            onClick={() => {
              openMenu(!menu);
              setShowmenu(!showMenue);
            }}
          />
        ) : (
          <RiCloseFill
            size={30}
            className=" md:hidden absolute right-10 top-6  transition-all duration-300"  onClick={() => {
                openMenu(!menu);
                setShowmenu(!showMenue);
              }}
          />
        )}
      </nav>  
    </>
  );
};

export default Navbar;
