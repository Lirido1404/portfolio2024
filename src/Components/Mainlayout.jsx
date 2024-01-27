import React from 'react'
import "../Components/Mainlayout.css";
import photomp from "../Images/photomp.png";
import {motion} from "framer-motion";
import linkedIn from "../Images/linkedin.svg";
import githublogo from "../Images/github2.svg";
import htmllogo from "../Images/htmllogo.svg";
import csslogo from "../Images/csslogo.svg";
import javascriptlogo from "../Images/jslogo.svg";
import bootstraplogo from "../Images/bootstraplogo.png";
import reactlogo from "../Images/reactlogo.svg";
import tailwindlogo from "../Images/tailwindlogo.svg";
import phplogo from "../Images/phplogo.svg";
import sqllogo from "../Images/sqllogo2.png";
import symfonylogo from "../Images/symfonylogo.svg";

function Mainlayout() {
  return (
    <div className='' id='home'>
        <div className='flex justify-center items-center mt-16 relative'>
          <img src={photomp} alt="" className='border-2 border-[#B8FFC7] rounded-full'/>
          
          <motion.div className='w-16 h-16 bg-[#00000056] absolute rounded-full shadowamettre top-[-12px] left-[50%] bulle1 flex justify-center items-center' drag dragConstraints={{ left: -0, right: 0, bottom : -0,top:0 }}>
              
          </motion.div>
          <motion.div className='w-12 h-12 bg-[#00000056] absolute rounded-full shadowamettre bulle2 top-16 right-[50%] mr-8 flex justify-center items-center' drag dragConstraints={{ left: -0, right: 0, bottom : -0,top:0 }}>
          
          </motion.div>
          <motion.div className='w-8 h-8 bg-[#00000056] absolute rounded-full shadowamettre bulle3 top-32 left-[50%] ml-4 flex justify-center items-center' drag dragConstraints={{ left: -0, right: 0, bottom : -0,top:0 }}>
          
          </motion.div>
        </div>
        <div className='w-[70%] mx-auto'>
          <div className='mt-2 '>
              <h1 className='text-[35px] text-white font-bold'>
                Développeur <br /> Front-End
              </h1>
          </div>
          <div className='mt-2'>
              <h2 className='text-[18px] text-white w-[25ch] h2pres '>
              Salut, moi c’est Maxime Prévot, un jeune passionné par le développement web basé en France, sur Paris 📍
              </h2>
              <div className='flex gap-4 mt-2'>
                <img src={linkedIn} alt="" />
                <img src={githublogo} alt="" />
              </div>
          </div>
          <div className='mt-10 '>
            <h3 className='text-lg text-white techstack '>
            Tech Stack
            </h3>
          </div>
          <div className='h-1 w-8 bg-[#B8FFC7] mt-4'>

          </div>
          <div className='sectionlogo mt-4'>
            <img src={htmllogo} alt="" className='w-16 h-16' />
            <img src={csslogo} alt="" className='w-16 h-16' />
            <img src={javascriptlogo} alt="" className='w-16 h-16 p-1' />
            <img src={bootstraplogo} alt="" className='w-18 h-16 p-1' />
            <img src={reactlogo} alt="" className='w-16 h-16' />
            <img src={tailwindlogo} alt="" className='w-16 h-16' />
            <img src={phplogo} alt="" className='w-16 h-16' />
            <img src={sqllogo} alt="" className='w-14 h-14' />
            <img src={symfonylogo} alt="" className='w-16 h-16' />          
          </div>

          <div className='h-1 w-8 bg-[#B8FFC7] mt-4'>

          </div>

          <div className='mt-10 '>
            <h3 className='text-lg text-white text-center font-bold' >
            Quelques-uns de mes projets
            </h3>
          </div>
          <div className='mt-2 '>
            <h3 className='text-base text-white text-center italic'>
            Datavisualisation - Covid-19 Tracker
            </h3>
          </div>
        
        </div>
    </div>
  )
}

export default Mainlayout