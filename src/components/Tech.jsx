import React from "react";
import { styles } from '../styles'
import { BallCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants";

const Tech = () => {
  const isMobile = window.matchMedia("(max-width: 500px)").matches;
  const Map = (isMobile ,technologies)=>{
    if(isMobile){
      return(
    technologies.slice(3,7).map((technology)=>(
    <div>
    <div className='w-28 h-28' key={technology.name}>
    <BallCanvas icon={technology.icon}/>
    <p className="flex justify-center text-white font-bold">{technology.name}</p>
    <p className="flex justify-center text-white">etc</p>
    </div>
    </div>
    )))
    }
    else{return(
      technologies.map((technology)=>(
        <div className='w-28 h-28' key={technology.name}>
        <BallCanvas icon={technology.icon}/>
        <p className="flex justify-center text-white font-bold">{technology.name}</p>
        </div>
      )))
    }
  }
  return (
    <>
    <h1 className='font-bold flex justify-center text-lg mb-5 text-[#915EFF]'>My Tech Stack</h1>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {Map(isMobile ,technologies)}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");