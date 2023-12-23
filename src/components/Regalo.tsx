import React from 'react';
import regaloGif from '/regaloGif.gif'
import Popup from 'reactjs-popup';

const Regalo: React.FC = () => {
  return (
    <div className='mt-12 w-[85%] shadow-black rounded-2xl flex flex-col justify-center items-center gap-8 py-12 px-6 text-center font-sans'>
      <img src={regaloGif} alt="anillogif" className='w-[120px]' />
      <p className=''>Lo que más queremos es compartir con vos nuestro gran día, <br/>pero si deseas regalarnos algo<br/>podés hacer clic en el siguiente botón</p>
      <Popup trigger={<button className='mt-6 shadow-black rounded-full p-4'>VER INFORMACIÓN</button>} position="center center">
        <div className="bg-green-400 w-fit h-fit p-4 text-left rounded-2xl text-xl font-pop shadow-full z-50">
          <p className="my-12 text-5xl text-center font-dance">Rocio y Franco</p>
          <p className="my-4">CVU: 1430001713036181630015</p>
          <p className="my-4">Alias: nuestraboda03-02</p>
          <p className="my-4">CUIT/CUIL: 27-37483047-9</p>
          <p className="my-8 text-center text-2xl">Brubank</p>
        </div>
      </Popup>
    </div>
  );
};

export default Regalo;
