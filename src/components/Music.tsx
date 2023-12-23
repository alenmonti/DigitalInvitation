import React from 'react';

import song from '/song.mp3';

const Music = () => {
  return (
    <audio loop controls className='w-full my-[-5px]'>
      <source src={song} type="audio/ogg" />
    </audio>
  );
};

export default Music;
