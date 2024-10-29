import React from 'react'
import Img1 from '../../Assets/image-1.png';
import { IoMdArrowRoundForward } from "react-icons/io";

const About = () => {
  return (
    <>
      <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
<div>
    <h2 className='text-2xl md:text-4xl font-bold'>
About
    </h2>

    <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
<img src={Img1} alt=" About Image" />

<ul>
    <div className='flex gap-3 py-4'>
    <IoMdArrowRoundForward size={30} className=' mt-1'/>

    <span className='w-96'>
<h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend Developer</h1>
<p className=' text-sm md:text-md leading-normal pt-2'>
    As a frontend developer, I build websites that are easy to use and look good. I work with colors, fonts, and layouts to create pages that people enjoy. I also make sure these sites load fast and work well on phones, tablets, and computers for everyone to access.
    </p>
    </span>
    </div>

    <div className='flex gap-3 py-4'>
    <IoMdArrowRoundForward size={30} className='mt-1'/>

    <span className='w-96'>
<h1 className='text-xl md:text-2xl font-semibold leading-normal'>Web Developer</h1>
<p className=' text-sm md:text-md leading-normal pt-2'>
As a web developer, I create websites that are both functional and attractive. I use languages like HTML, CSS, and JavaScript to build pages. My job involves writing code, testing for errors, and fixing issues. I also collaborate with designers to ensure the site looks great and works well for users.
    </p>
    </span>
    </div>

    <div className='flex gap-3 py-4'>
    <IoMdArrowRoundForward size={30} className=' mt-1'/>

    <span className='w-96'>
<h1 className='text-xl md:text-2xl font-semibold leading-normal'>User interface designer</h1>
<p className=' text-sm md:text-md leading-normal pt-2'>
As a user interface designer, I focus on making websites and apps easy to use. I create layouts, buttons, and menus that are clear and simple. I use colors and shapes to guide users and improve their experience. My goal is to design interfaces that are both beautiful and functional for everyone.
    </p>
    </span>
    </div>


</ul>
    </div>
</div>
      </div>
    </>
  )
}

export default About;
