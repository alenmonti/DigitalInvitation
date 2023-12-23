import React from 'react';
import down from '/down.png';

const GoDown = () => {
  return (
    <div>
      <img src={down} alt="down" className='animate-bounce w-[35px] ml-[-15px] mx-auto absolute z-50'/>
    </div>
  );
};

export default GoDown;
