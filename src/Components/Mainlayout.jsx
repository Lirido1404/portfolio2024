import React, { useEffect, useState } from 'react'
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

import imgcov11 from "../Images/main/imagecov111.png";

import imgwebdocu from "../Images/main/webdocu2.png";
import digiforall from "../Images/main/digi2.png";
import Ajax from "../Images/main/Ajaxxx.png";
import Mariojs from "../Images/main/Mariojs.png";

import stnic from "../Images/main/stnico6.png";
import IUT from "../Images/main/IUTlogo.png";
import photomax2 from "../Images/main/photomax2.jpg";

import piano from "../Images/main/pianoicon.svg";
import photo from "../Images/main/photoicon.svg";
import book from "../Images/main/bookicon.svg";

import nextjslogo from "../Images/main/Nexticon.svg";
import nodejsicon from "../Images/main/Nodejsicon.svg";

import mailicon from "../Images/main/mailicon.png";
import telicon from "../Images/main/telicon.png";


function Mainlayout() {


  const [showReals, setShowReals] = useState(false);

  const handleShowReals = () => {
    setShowReals(!showReals);
  };

  useEffect(() => {
    if (showReals) {
      const real5Div = document.getElementById('real5');
      if (real5Div) {
        real5Div.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [showReals]);


  return (
    <div className='' >
      <header>
        <div className='flex justify-center items-center mt-16 relative'>
        <div className='photomp-container'>
          <img src={photomp} alt="" className='photomp' draggable={false}/>
        </div>
          
          <motion.div className='w-16 h-16 bg-[#00000056] absolute rounded-full shadowamettre top-[-12px] left-[50%] bulle1 flex justify-center items-center cursor-pointer' drag dragConstraints={{ left: -0, right: 0, bottom : -0,top:0 }}>
              
          </motion.div>
          <motion.div className='w-12 h-12 bg-[#00000056] absolute rounded-full shadowamettre bulle2 top-16 right-[50%] mr-8 flex justify-center items-center cursor-pointer' drag dragConstraints={{ left: -0, right: 0, bottom : -0,top:0 }}>
          
          </motion.div>
          <motion.div className='w-8 h-8 bg-[#00000056] absolute rounded-full shadowamettre bulle3 top-32 left-[50%] ml-4 flex justify-center items-center cursor-pointer' drag dragConstraints={{ left: -0, right: 0, bottom : -0,top:0 }}>
          
          </motion.div>
        </div>
      </header>
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
                <img src={linkedIn} alt="" draggable={false}/>
                <img src={githublogo} alt="" draggable={false}/>
              </div>
          </div>


          <div className='mt-10 luciole2 '>
            <h3 className='text-lg text-white techstack '>
            Tech Stack
            </h3>
          </div>
          <div className='h-1 w-8 bg-[#B8FFC7] mt-4 rounded-full'>

          </div>
          <div className='sectionlogo mt-4'>
            <img src={htmllogo} alt="" className='w-16 h-16' draggable={false}/>
            <img src={csslogo} alt="" className='w-16 h-16' draggable={false}/>
            <img src={javascriptlogo} alt="" className='w-16 h-16 p-1' draggable={false}/>
            <img src={bootstraplogo} alt="" className='w-18 h-16 p-1' draggable={false}/>
            <img src={reactlogo} alt="" className='w-16 h-16' draggable={false}/>
            <img src={tailwindlogo} alt="" className='w-16 h-16' draggable={false}/>
            <img src={phplogo} alt="" className='w-16 h-16' draggable={false}/>
            <img src={sqllogo} alt="" className='w-14 h-14' draggable={false}/>
            <img src={symfonylogo} alt="" className='w-16 h-16' draggable={false}/>          
          </div>

          <div className='h-1 w-8 bg-[#B8FFC7] mt-4 rounded-full'>

          </div>

          <div className='mt-10 ' id='real'>
            <h3 className='text-lg text-white text-center font-bold' >
            Quelques-uns de mes projets
            </h3>
          </div>
          <div className='mt-20 '>
          <h3 className='text-lg text-white text-center '>
            Datavisualisation
            </h3>
            <h3 className='text-center text-white italic'>
            Covid-19 Tracker
            </h3>
          </div>
          <div className='relative justify-center flex mt-8 luciole3'>
          <img src={imgcov11} alt="" className='rounded-lg border-2 border-[#B8FFC7] ' draggable={false}/>
          
          </div>
          <div className='mt-6 flex justify-center'>
            <p className='text-justify text-white'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quasi 
              fugiat assumenda eligendi sit consequatur maiores, id non voluptas odio sunt, temporibus 
              
            </p>
          </div>
          <div className='flex justify-center mt-4'>
            <a href='https://shiny-alpaca-e24526.netlify.app/' type='btn' className='bg-[#B8FFC7] px-8 py-1  rounded border-1 border-[#EDEDED] btncta'>
              <p className='text-xl font-bold opacity-90 '>Essayer !</p>
            </a>
          </div>







          <div className='mt-20 '>
          <h3 className='text-lg text-white text-center '>
            Webdocumentaire
            </h3>
            <h3 className='text-center text-white italic'>
            Au delà du swipe
            </h3>
          </div>
          <div className='relative justify-center flex mt-8 luciole4'>
          <img src={imgwebdocu} alt="" className='rounded-lg border-2 border-[#B8FFC7] ' draggable={false}/>
          
          </div>
          <div className='mt-6 flex justify-center'>
            <p className='text-justify text-white'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quasi 
              fugiat assumenda eligendi sit consequatur maiores, id non voluptas odio sunt, temporibus 
              
            </p>
          </div>
          <div className='flex justify-center mt-4'>
          <a href='https://webdoc-dating-app.netlify.app/' type='btn' className='bg-[#B8FFC7] px-8 py-1  rounded border-1 border-[#EDEDED] btncta'>
              <p className='text-xl font-bold opacity-90 '>Essayer !</p>
            </a>
          </div>






          
          <div className='mt-20 '>
          <h3 className='text-lg text-white text-center '>
            Site de campagne
            </h3>
            <h3 className='text-center text-white italic'>
            Digi4All
            </h3>
          </div>
          <div className='relative justify-center flex mt-8 '>
          <img src={digiforall} alt="" className='rounded-lg border-2 border-[#B8FFC7] ' draggable={false}/>
          
          </div>
          <div className='mt-6 flex justify-center'>
            <p className='text-justify text-white'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quasi 
              fugiat assumenda eligendi sit consequatur maiores, id non voluptas odio sunt, temporibus 
              
            </p>
          </div>
          <div className='flex justify-center mt-4'>
          <a href='https://digi4all.maxime.prevot.mmi-velizy.fr/index.html' type='btn' className='bg-[#B8FFC7] px-8 py-1  rounded border-1 border-[#EDEDED] btncta'>
              <p className='text-xl font-bold opacity-90 '>Essayer !</p>
            </a>
          </div>




        {
          !showReals && (
            <>
            <div className='flex justify-center mt-10'>
          <button className='bg-white px-16 py-1  rounded border-1 border-[#EDEDED] btncta' onClick={handleShowReals}>
            <p className='text-xl font-bold opacity-90 text-[#08262E] '>+ de projets</p>
          </button>
          </div>
            </>
          )
        }

        {showReals && (
          <>
          <div className='reqAjax'>
          <div className='mt-20  '>
          <h3 className='text-lg text-white text-center '>
            Requêtes Ajax
            </h3>
            <h3 className='text-center text-white italic'>
            Mes mondes imaginaires
            </h3>
          </div>
          <div className='relative justify-center flex mt-4 luciole5'>
          <img src={Ajax} alt="" className='rounded-lg border-2 border-[#B8FFC7] ' draggable={false}/>
          
          </div>
          <div className='mt-6 flex justify-center'>
            <p className='text-justify text-white'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quasi 
              fugiat assumenda eligendi sit consequatur maiores, id non voluptas odio sunt, temporibus 
              
            </p>
          </div>
          <div className='flex justify-center mt-4'>
          <a href='https://maxime.prevot.mmi-velizy.fr/Ajaxjs1/' type='btn' className='bg-[#B8FFC7] px-8 py-1  rounded border-1 border-[#EDEDED] btncta'>
              <p className='text-xl font-bold opacity-90 '>Essayer !</p>
            </a>
          </div>
          </div>



          <div className='reqMario' id='real5'>
          <div className='mt-20' >
              <h3 className='text-lg text-white text-center'>
                Jeux type mario
              </h3>
              <h3 className='text-center text-white italic'>
                Javascript &rarr; Canvas
              </h3>
            </div>
            <div className='relative justify-center flex mt-4'>
              <img src={Mariojs} alt="" className='rounded-lg border-2 border-[#B8FFC7]' draggable={false}/>
            </div>
            <div className='mt-6 flex justify-center'>
              <p className='text-justify text-white'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quasi
                fugiat assumenda eligendi sit consequatur maiores, id non voluptas odio sunt, temporibus
              </p>
            </div>
            <div className='flex justify-center mt-4' >
              <a href='https://maxime.prevot.mmi-velizy.fr/Ajaxjs1/' type='btn' className='bg-[#B8FFC7] px-8 py-1 rounded border-1 border-[#EDEDED] btncta'>
                <p className='text-xl font-bold opacity-90 '>Essayer !</p>
              </a>
            </div>
            </div>
          </>
        )}

          <div className='h-1 w-[100%] bg-[#B8FFC7] mt-14 rounded-full'>

          </div>

          <h2 className='text-center text-2xl mt-4 text-white font-bold ' id='profil'>
            Mes études
          </h2>

<div className='flex flex-col mt-10 gap-6'>


          <div className=' flex justify-center flex-col bg-white relative rounded-lg border-[3px] border-[#E4E4E4] parentdivetudes1 luciole6'>
            
            <h3 className='text-center mt-2'>Lycée</h3>
            <p className='text-center text-sm'><span>B</span>ac <span>T</span>echnologique STI2D - <span>T</span>rès <span>B</span>ien</p>
              
              <div className='h-1 w-[80%] bg-[#E4E4E4] mx-auto mt-1 rounded-full separateurd1'>
                
              </div>
              <img src={stnic} alt="" className='w-[40%] h-[40%] mx-auto mt-2' draggable={false}/>
              <p className='text-center mt-2 plora'>2020 - 2022</p>
            
          </div>




          <div className=' flex justify-center flex-col bg-white relative rounded-lg border-[3px] border-[#E4E4E4] parentdivetudes2 '>
            
            <h3 className='text-center mt-2'>BUT MMI</h3>
            <p className='text-center text-sm'>(<span>M</span>étiers du <span>M</span>ultimédia et de l’<span>I</span>nternet)</p>
              
              <div className='h-1 w-[80%] bg-[#E4E4E4] mx-auto mt-1 rounded-full separateurd2'>
                
              </div>
              <img src={IUT} alt="" className='w-[70%] h-[70%] mx-auto mt-2' draggable={false}/>
              <p className='text-center mt-2 plora'>2020 - 2022</p>
            
          </div>

</div>

          <div className='h-1 w-[100%] bg-[#B8FFC7] mt-14 rounded-full'>

          </div>
          

          <div className='flex flex-col gap-8 mt-4 '>
            <h2 className='text-center text-2xl text-white font-bold'>
              A propos de moi
            </h2>
            <div className='flex justify-center '>
            <img src={photomax2} alt="" className='w-[80%] h-[80%] rounded-full border-2 border-[#B8FFC7] ' />
            </div>
            <div className='flex justify-center'>
            <p className='text-xl text-justify text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione quae nostrum, 
               minima eligendi quibusdam voluptatibus quidem eos quam ipsam nisi.</p>
            </div>
          </div>




          <div className='h-1 w-[100%] bg-[#B8FFC7] mt-14 rounded-full'>

          </div>
         



            <h2 className='text-center text-2xl text-white font-bold mt-4'>
              Mes passions
            </h2>
          



          <div className='flex gap-4 justify-center mt-6'>

            <div className='luciole7'>
              <div className='bg-white border-2 border-[#B8FFC7] rounded-full flex justify-center items-center w-20 h-20'>
              <img src={piano} alt=""  className='w-8 h-8'/>
              </div>
            </div>

            <div className='luciole7'>
              <div className='bg-white border-2 border-[#B8FFC7] rounded-full flex justify-center items-center w-20 h-20'>
              <img src={photo} alt=""  className='w-8 h-8'/>
              </div>
            </div>

            <div className='luciole7'>
              <div className='bg-white border-2 border-[#B8FFC7] rounded-full flex justify-center items-center w-20 h-20'>
              <img src={book} alt=""  className='w-8 h-8'/>
              </div>
            </div>

          </div>

          <div className='h-1 w-[100%] bg-[#B8FFC7] mt-14 rounded-full'>

          </div>

          <h2 className='text-center text-2xl text-white font-bold mt-4'>
              Mes objectifs
          </h2>

          <div className='flex flex-wrap justify-center gap-6 mt-4'>
            <div className='flex flex-col'>
            <img src={nextjslogo} alt="" className='h-16 w-16 scale-150'/>
            <p className='text-center text-white'>Nextjs</p>
            </div>
            <div className='flex flex-col'>
            <img src={nodejsicon} alt="" className='h-16 w-16'/>
            <p className='text-center text-white'>Nodejs</p>
            </div>
          </div>

          <footer className='h-20 w-[100%] bg-[#B8FFC7] mt-10 rounded-lg flex flex-col py-2 px-4 mb-8 justify-center gap-2 luciole8' id='contact'>
          
          <div className='flex gap-2 items-center'>
            <img src={mailicon} alt="" className='w-6 h-6' />
            <p className='text-[13px]'>maxime.prevot1804kz@gmail.com</p>
          </div>

          <div className='flex gap-2 items-center'>
            <img src={telicon} alt="" className='w-6 h-6' />
            <p className='text-[13px]'>07 81 78 72 72</p>
          </div>
          
          </footer>









        
        </div>
    </div>
  )
}

export default Mainlayout