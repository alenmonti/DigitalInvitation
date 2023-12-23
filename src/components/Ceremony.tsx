import React from 'react';
import ceremonyText from '/ceremonia.png';
import anilloGif from '/anilloGif.gif';

const Ceremony: React.FC = () => {
  return (
    <div className='w-[85%] shadow-black rounded-2xl flex flex-col justify-center items-center gap-8 py-12 text-center font-sans'>
      <img src={ceremonyText} alt="ceremonia" className='w-[80%]' />
      <img src={anilloGif} alt="anillogif" className='w-[80px]' />
      <p className='text-xl '>Parque Gaona,<br/>Yapeyú al 2751 <br/>Moreno<br/>19:00 hs</p>
      <a href='https://www.google.com/maps/place/Yapey%C3%BA+2751,+B1743IAE+Moreno,+Provincia+de+Buenos+Aires/@-34.6313292,-58.776257,18.02z/data=!4m5!3m4!1s0x95bc95b61060df97:0x4f22c5fdc2ada79c!8m2!3d-34.6313011!4d-58.7759056?entry=ttu'
        target='_blank'
        className='mt-6 shadow-black rounded-full p-4'>CÓMO LLEGAR</a>
    </div>
  );
};

export default Ceremony;
