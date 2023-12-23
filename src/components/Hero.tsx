import React from 'react';
import noscasamos from '/casamos.png';
import GoDown from './GoDown';

const Hero: React.FC = () => {
  return (
    <div className='bg-[url("/bg-black2.png")] w-full min-w-[300px] max-w-[1000px] aspect-[9/16] bg-contain bg-center bg-no-repeat flex flex-col justify-evenly py-10 items-center relative '>
      <img src={noscasamos} alt="noscasamos" className='w-[170px] mb-[-30px] mx-auto'/>
      <div className='text-7xl text-center w-fit'>
        <h1 className=''>Rocio</h1>  
        <h1 className='-translate-y-2'>y</h1>
        <h1 className=''>Franco</h1>
      </div>
      <div className='flex items-center gap-2 '>
        <span className='border-b border-gray-400 w-12 h-0'></span>
        <p className='font-[poppins]'>03.02.2024</p>
        <span className='border-b border-gray-400 w-12 h-0'></span>
      </div>
      <GoDown />
    </div>
  );
};

export default Hero;
