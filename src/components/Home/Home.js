import React from 'react'
import Img from '../../Assets/image.png';
import TextChenger from '../TextChenger';
const Home = () => {
  return (
    <>
      <div  className='text-white flex md:flex flex-wrap flex-col md:flex-row  w-full justify-between items-start p-10 md:p-20'>
<div className='md:w-2/4 md:pt-10'>
<h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter pb-8'>
<TextChenger/>
</h1>
<p className='text-sm md:text-2xl leading-tight tracking-tight'>
   I'm a passionate Frontend Developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a decade. 
</p>
<button className='mt-5 md:mt-10  text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>Contact Me</button>
</div>


<div>
    <img src={Img} alt=" Avtar Image" />
</div>
      </div>
    </>
  )
}

export default Home;
