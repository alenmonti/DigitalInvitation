import Hero from "./components/Hero"
import Phrase from "./components/Phrase"
import CountDown from "./components/CountDown"
import Ceremony from "./components/Ceremony"
import DressCode from "./components/DressCode"
import Inolvidable from "./components/Inolvidable"
import Venis from "./components/Venis"
import Gracias from "./components/Gracias"
import Regalo from "./components/Regalo"
import Footer from "./components/Footer"
import Music from "./components/Music"

import foto1 from "/foto1.jpg"
import foto2 from "/foto2.jpeg"


function App() {


  return (
    <div className="flex flex-col items-center w-full lg:w-[700px] m-auto">
      <Hero />
      <Music />
      <Phrase />
      <CountDown />
      <Ceremony />
      <img src={foto1} alt="foto1" className="w-full mt-10" />
      <DressCode />
      <img src={foto2} alt="foto2" className="w-full mt-10" />
      <Inolvidable />
      <Venis />
      <Regalo />
      <Gracias />
      <Footer />
    </div>
  )
}

export default App
