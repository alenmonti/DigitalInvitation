import React from 'react';
import gracias from '/gracias.png'

const Gracias: React.FC = () => {
  return (
    <div className='h-fit bg-gray-950 p-8 pt-20 mt-12'>
      <img src={gracias} alt="gracias" className='w-[80%] m-auto' />
      <p className='text-white text-center text-2xl font-bold mt-10'>Los esperamos para compartir éste día tan especial para nosotros. Para crear el ambiente perfecto, hemos decidido organizar un evento exclusivo para adultos, apreciamos tu comprensión.</p>
      
    </div>
  );
};

export default Gracias;
