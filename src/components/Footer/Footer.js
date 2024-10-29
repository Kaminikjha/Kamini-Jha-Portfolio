import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div
        id="Footer"
        className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
      >
        <div className="">
          <h1 className="text-xl md:text-6xl font-bold pb-5"> Contact </h1>
          <h3 className="text-xs md:text-2xl font-normal ">
           
            Fell free to reach out
          </h3>
        </div>
      

      <ul className=" text-xs md:text-xl pl-16 ">
        <li className="flex gap-2 items-center cursor-pointer hover:underline"> 
            <MdOutlineMailOutline size={20}/>
            kaminijhag@gmail.com
        </li>
       
        <li className="flex gap-2 items-center cursor-pointer hover:underline pt-2 md:pt-0">
        <FaGithub size={20} />
        https://github.com/Kaminikjha
        </li>

        <li className="flex gap-2 md:gap-1 items-center cursor-pointer hover:underline ">
        <CiLinkedin size={25}/>
        <span className="mt-3 md:mt-0">
        https://www.linkedin.com/in/kamini-jha-b694ba217/

        </span>
       
        </li>
      </ul>

      </div>
    </>
  );
};

export default Footer;
