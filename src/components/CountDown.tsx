import React from "react";
import { useState } from "react";
import globosGif from '/globosGif.gif';

function Timer() {
        const [dayy, setDayy] = useState(0);
        const [hourr, setHourr] = useState(0);
        const [secondd, setSecondd] = useState(0);
        const [minutee, setMinutee] = useState(0);


        const second = 1000,
              minute = second * 60,
              hour = minute * 60,
              day = hour * 24;

        const birthday = "02/03/2024"
        const countDown = new Date(birthday).getTime();

        const x = setInterval(() => {    
    
            setDayy(Math.floor((countDown - Date.now()) / (day)))
            setHourr(Math.floor(((countDown - Date.now()) % (day)) / (hour)))
            setMinutee(Math.floor(((countDown - Date.now()) % (hour)) / (minute)))
            setSecondd(Math.floor(((countDown - Date.now()) % (minute)) / second))
    
            //do something later when date is reached
            if ((countDown - Date.now()) < 0) {
            clearInterval(x);
            }
            //seconds
        }, 1000);

    return (
        <div className="w-[85%] relative my-14 py-10 font-[poppins] shadow-black rounded-2xl">
            <h2 className="font-normal text-6xl text-center mb-12  font-dance">Faltan</h2>
            <div className="flex justify-evenly text-4xl m-auto relative w-[full] max-w-[522px]">
                <div className="flex-col items-center flex min-w-12">
                    <p id="days" className="text-center font-light">{dayy}</p>
                    <p className="text-sm">Días</p>
                </div>
                <div className="flex-col items-center flex min-w-12">
                    <p id="hours" className="text-center font-light">{hourr}</p>
                    <p className="text-sm">Hs</p>
                </div>
                <div className="flex-col items-center flex min-w-12">
                    <p id="minutes" className="text-center font-light">{minutee}</p>
                    <p className="text-sm">Min</p>
                </div>
                <div className="flex-col items-center flex min-w-12">
                    <p id="seconds" className="text-center font-light">{secondd}</p>
                    <p className="text-sm">Seg</p>
                </div>
            </div>
            <img src={globosGif} alt="globosGif" className='w-[120px] m-auto mt-12' />
        </div>

    )
}

export default Timer;