import React from 'react';
import veniss from '/venis.png'
import corazonesGif from '/corazonesGif.gif'

const Venis: React.FC = () => {
  return (
    <div className='w-[85%] flex flex-col justify-center items-center rounded-2xl gap-8 py-12  shadow-black mt-12 text-center'>
      <img src={veniss} alt="venis" className='w-[80%]'/>
      <img src={corazonesGif} alt="trajeGif" className='w-[120px]' />
      <p className='text-xl font-sans'>Esperamos que puedas acompañarnos<br/>en este momento tan especial.</p>
      <a href='https://docs.google.com/forms/d/e/1FAIpQLSd34lXzOmc4l7hE5UFjmPHZl_vKqa0o0WizIIB9vtf8RFUdRw/viewform?usp=sf_link'
        target='_blank'
        className='mt-6 shadow-black rounded-full p-4 font-sans'>CONFIRMAR ASISTENCIA</a>
    </div>
  );
};

export default Venis;
