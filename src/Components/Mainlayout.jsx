import React, { useEffect, useState } from "react";
import "../Components/Mainlayout.css";
import photomp from "../Images/mpbut23.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
import angular from "../Images/main/angular-svgrepo-com.svg";

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
import JeuxTypeMario from "../Pages/JeuxTypeMario";

function Mainlayout() {
  const [showReals, setShowReals] = useState(false);

  const handleShowReals = () => {
    setShowReals(!showReals);
  };

  useEffect(() => {
    if (showReals) {
      const real5Div = document.getElementById("real5");
      if (real5Div) {
        real5Div.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [showReals]);

  return (
    <div className="">
      <div className="w-[70%] mx-auto">
        <div className="contun mt-40">
          <header className="flex justify-center items-start element1 ">
            
              
                <div className="photompcont">
                <img
                  src={photomp}
                  alt=""
                  className="photomp "
                  draggable={false}
                />
                </div>
             

              
          </header>

          <div className=" element2 ">
            <div className="mt-2 ">
              <h1 className="text-[45px] text-white textdevfr ">
                Développeur <br className="brtitre" /> Front-End
              </h1>
            </div>
            <div className="mt-2">
              <h2 className="text-[18px] text-white w-[25ch] h2pres ">
                Salut, moi c’est Maxime Prévot, un jeune passionné par le
                développement web basé en France, sur Paris 📍
              </h2>
              <div className="flex gap-6 mt-6 logores">
                <img src={linkedIn} alt="" draggable={false}  className="imgres"/>
                <img src={githublogo} alt="" draggable={false} className="imgres" />
              </div>
            </div>
            <div className="sectiontechlogocont">
              <div className="flex flex-col sectiontechlogo">
                <div className="mt-10 luciole2 mb-8 ">
                  <h3 className="text-lg text-white techstack font-bold">
                    Tech Stack
                  </h3>
                </div>

                <div className="h-1 w-8 bg-[#B8FFC7] mt-6 rounded-full barresep1"></div>

                <div className="h-8 w-1 bg-[#B8FFC7] mt-4 rounded-full barresep2 hidden  mb-2"></div>

                <h3 className="text-lg text-white mt-2 styleInter italic infodev">
                  Front-End
                </h3>

                <div className="sectionlogo mt-2">
                  <img
                    src={htmllogo}
                    alt=""
                    className="w-16 h-16"
                    draggable={false}
                  />
                  <img
                    src={csslogo}
                    alt=""
                    className="w-16 h-16"
                    draggable={false}
                  />
                  <img
                    src={javascriptlogo}
                    alt=""
                    className="w-16 h-16 p-1"
                    draggable={false}
                  />
                  <img
                    src={angular}
                    alt=""
                    className="w-18 h-18"
                    draggable={false}
                  />
                  <img
                    src={reactlogo}
                    alt=""
                    className="w-16 h-16"
                    draggable={false}
                  />
                  <img
                    src={tailwindlogo}
                    alt=""
                    className="w-16 h-16"
                    draggable={false}
                  />
                </div>

                <div className="h-1 w-8 bg-[#B8FFC7] mt-4 rounded-full barresep1"></div>

                <div className="h-8 w-1 bg-[#B8FFC7] mt-4 rounded-full barresep2 hidden mb-2 "></div>

                <h3 className="text-lg text-white mt-2 styleInter italic infodev">
                  Back-End
                </h3>

                <div className="sectionlogoback mt-2 ">
                  <img
                    src={phplogo}
                    alt=""
                    className="w-16 h-16"
                    draggable={false}
                  />
                  <img
                    src={sqllogo}
                    alt=""
                    className="w-14 h-14"
                    draggable={false}
                  />
                  <img
                    src={symfonylogo}
                    alt=""
                    className="w-16 h-16"
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>




        <div className="h-1 w-[70%] mx-auto bg-[#B8FFC7] mt-14 rounded-full hidden sepP1Real"></div>




        <div className="mt-10 " id="real">
          <h3 className="text-lg text-white text-center font-bold projetstext">
            Quelques-uns de mes projets
          </h3>
        </div>

        <div className="mt-20 sectionReal1">
          <div className="petitesectionReal1">
            <div className=" real1sectiongauche">
              <div className="relative justify-center flex mt-8 luciole3 ">
                <img
                  src={imgcov11}
                  alt=""
                  className="rounded-lg border-2 border-[#B8FFC7] "
                  draggable={false}
                />
              </div>
            </div>
            <div className="real1sectiondroite ">
            <div>
              <h3 className="text-lg text-white text-center TitreReal1">Datavisualisation</h3>
              <h3 className="text-center text-white italic TitreReal2">Covid-19 Tracker</h3>
            </div>
            <div className="">
            <div className="mt-6 flex justify-center texteReal1">
              <p className="text-justify text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
                quasi fugiat assumenda eligendi sit consequatur maiores, id non
                voluptas odio sunt, temporibus
              </p>
            </div>
            <div className="flex justify-center mt-4 cta1">
              <Link to="/CovidTracker">
                <button className="bg-[#B8FFC7] px-8 py-1  rounded border-1 border-[#EDEDED] btncta">
                  <p className="text-xl font-bold opacity-90 ">En savoir +</p>
                </button>
              </Link>
            </div>
            </div>
            </div>
            </div>
        </div>







        <div className="mt-20 sectionReal1 sectionReal2">
          <div className="petitesectionReal1">
            
            <div className="real1sectiondroite  ">
            <div>
              <h3 className="text-lg text-white text-center TitreReal1">Webdocumentaire</h3>
              <h3 className="text-center text-white italic TitreReal2">Au delà du swipe</h3>
            </div>
            <div className="">
            <div className="mt-6 flex justify-center texteReal1">
              <p className="text-justify text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
                quasi fugiat assumenda eligendi sit consequatur maiores, id non
                voluptas odio sunt, temporibus
              </p>
            </div>
            <div className="flex justify-center mt-4 cta1">
              <Link to="/Webdocumentaire">
                <button className="bg-[#B8FFC7] px-8 py-1  rounded border-1 border-[#EDEDED] btncta">
                  <p className="text-xl font-bold opacity-90 ">En savoir +</p>
                </button>
              </Link>
            </div>
            </div>
            </div>
            <div className=" real1sectiongauche  ">
              <div className="relative justify-center flex mt-8 luciole4 ">
                <img
                  src={imgwebdocu}
                  alt=""
                  className="rounded-lg border-2 border-[#B8FFC7] "
                  draggable={false}
                />
              </div>
            </div>
            </div>
        </div>












        <div className="mt-20 sectionReal1">
          <div className="petitesectionReal1">
            <div className=" real1sectiongauche">
              <div className="relative justify-center flex mt-8 luciole3 ">
                <img
                  src={digiforall}
                  alt=""
                  className="rounded-lg border-2 border-[#B8FFC7] "
                  draggable={false}
                />
              </div>
            </div>
            <div className="real1sectiondroite ">
            <div>
              <h3 className="text-lg text-white text-center TitreReal1">Site de campagne</h3>
              <h3 className="text-center text-white italic TitreReal2">Digi4All</h3>
            </div>
            <div className="">
            <div className="mt-6 flex justify-center texteReal1">
              <p className="text-justify text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
                quasi fugiat assumenda eligendi sit consequatur maiores, id non
                voluptas odio sunt, temporibus
              </p>
            </div>
            <div className="flex justify-center mt-4 cta1">
              <Link to="/Digi4All">
                <button className="bg-[#B8FFC7] px-8 py-1  rounded border-1 border-[#EDEDED] btncta">
                  <p className="text-xl font-bold opacity-90 ">En savoir +</p>
                </button>
              </Link>
            </div>
            </div>
            </div>
            </div>
        </div>






        {!showReals && (
          <>
            <div className="flex justify-center mt-10">
              <button
                className="bg-white px-16 py-1  rounded border-1 border-[#EDEDED] btncta"
                onClick={handleShowReals}
              >
                <p className="text-xl font-bold opacity-90 text-[#08262E] ">
                  + de projets
                </p>
              </button>
            </div>
          </>
        )}

        {showReals && (
          <>
            <div className="reqAjax" id="real5">
            <div className="mt-20 sectionReal1 sectionReal2">
          <div className="petitesectionReal1">
            
            <div className="real1sectiondroite  ">
            <div>
              <h3 className="text-lg text-white text-center TitreReal1">Requêtes Ajax</h3>
              <h3 className="text-center text-white italic TitreReal2">Mes mondes imaginaires</h3>
            </div>
            <div className="">
            <div className="mt-6 flex justify-center texteReal1">
              <p className="text-justify text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
                quasi fugiat assumenda eligendi sit consequatur maiores, id non
                voluptas odio sunt, temporibus
              </p>
            </div>
            <div className="flex justify-center mt-4 cta1">
              <Link to="/RequeteAjax">
                <button className="bg-[#B8FFC7] px-8 py-1  rounded border-1 border-[#EDEDED] btncta">
                  <p className="text-xl font-bold opacity-90 ">En savoir +</p>
                </button>
              </Link>
            </div>
            </div>
            </div>
            <div className=" real1sectiongauche  ">
              <div className="relative justify-center flex mt-8 luciole4 ">
                <img
                  src={Ajax}
                  alt=""
                  className="rounded-lg border-2 border-[#B8FFC7] "
                  draggable={false}
                />
              </div>
            </div>
            </div>
        </div>
            </div>







            <div className="reqMario">
            <div className="mt-20 sectionReal1">
          <div className="petitesectionReal1">
            <div className=" real1sectiongauche">
              <div className="relative justify-center flex mt-8 luciole3 ">
                <img
                  src={Mariojs}
                  alt=""
                  className="rounded-lg border-2 border-[#B8FFC7] "
                  draggable={false}
                />
              </div>
            </div>
            <div className="real1sectiondroite ">
            <div>
              <h3 className="text-lg text-white text-center TitreReal1">Jeux Type Mario</h3>
              <h3 className="text-center text-white italic TitreReal2">Javascript</h3>
            </div>
            <div className="">
            <div className="mt-6 flex justify-center texteReal1">
              <p className="text-justify text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
                quasi fugiat assumenda eligendi sit consequatur maiores, id non
                voluptas odio sunt, temporibus
              </p>
            </div>
            <div className="flex justify-center mt-4 cta1">
              <Link to="/JeuxMario">
                <button className="bg-[#B8FFC7] px-8 py-1  rounded border-1 border-[#EDEDED] btncta">
                  <p className="text-xl font-bold opacity-90 ">En savoir +</p>
                </button>
              </Link>
            </div>
            </div>
            </div>
            </div>
        </div>
            </div>
          </>
        )}

        <div className="h-1 w-[100%] bg-[#B8FFC7] mt-14 rounded-full"></div>

        <h2
          className="text-center text-2xl mt-4 text-white font-bold "
          id="profil"
        >
          Mes études
        </h2>

        <div className="flex justify-center">
          <div className="flex flex-col mt-10 gap-12 diviconetudes">
            <div className="flex justify-center flex-col bg-white relative rounded-lg border-[3px] border-[#E4E4E4] parentdivetudes1 luciole6 p-4">
              <h3 className="text-center mt-6 font-bold">Lycée</h3>
              <p className="text-center text-sm">
                <span>B</span>ac <span>T</span>echnologique STI2D -{" "}
                <span>T</span>rès <span>B</span>ien
              </p>

              <div className="h-1 w-[80%] bg-[#E4E4E4] mx-auto mt-1 rounded-full separateurd1"></div>
              <div className="m-8 h-20 w-40 flex justify-center items-center mx-auto">
                <img src={stnic} alt="" draggable={false} />
              </div>
              <p className="text-center mt-10 plora text-sm">2020 - 2022</p>
            </div>

            <div className=" flex justify-center flex-col bg-white relative rounded-lg border-[3px] border-[#E4E4E4] parentdivetudes2  p-4">
              <h3 className="text-center mt-6 font-bold">BUT MMI</h3>
              <p className="text-center text-sm">
                (<span>M</span>étiers du <span>M</span>ultimédia et de l’
                <span>I</span>nternet)
              </p>

              <div className="h-1 w-[80%] bg-[#E4E4E4] mx-auto mt-1 rounded-full separateurd2"></div>
              <div className="m-8 h-20 w-40 flex justify-center items-center mx-auto">
                <img src={IUT} alt="" draggable={false} />
              </div>
              <p className="text-center mt-2 plora text-sm">
                2022 - Aujourd'hui
              </p>
            </div>
          </div>
        </div>

        <div className="h-1 w-[100%] bg-[#B8FFC7] mt-14 rounded-full"></div>

        <div className="flex flex-col gap-8 mt-4 sectionpres">
          <div className="sectionprestt flex-col gap-12">
          <div className="flex justify-center bg-red-500 sectionphotomp2">
            <img
              src={photomax2}
              alt=""
              className="w-[80%] h-[80%] rounded-full border-2 border-[#B8FFC7] imgsoleilmp "
            />
          </div>
          <div className="sectionpresdroite">
          <h2 className="text-center text-2xl text-white font-bold textbsecpres2">
            A propos de moi
          </h2>
          <div className="flex flex-col sectiontextpres">
            <p className="text-xl text-justify text-white textpresmp2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
              quae nostrum, minima eligendi quibusdam voluptatibus quidem eos
              quam ipsam nisi.
            </p>
            <p className="text-xl text-justify text-white textpresmp2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
              quae nostrum, minima eligendi quibusdam voluptatibus quidem eos
              quam ipsam nisi.
            </p>
            <a href="../docs/CV_Maxime_Prevot_Dev2_2024_v2.pdf" download type="btn">
                <button className="bg-[#B8FFC7] px-8 py-1  rounded border-1 border-[#EDEDED] btncta">
                      <p className="text-xl font-bold opacity-90 ">En savoir +</p>
                </button>
            </a>
            
          </div>
          </div>
          </div>
        </div>

        <div className="h-1 w-[100%] bg-[#B8FFC7] mt-14 rounded-full"></div>

        <h2 className="text-center text-2xl text-white font-bold mt-4">
          Mes passions
        </h2>

        <div className="flex gap-4 justify-center mt-6">
          <div className="luciole7">
            <div className="bg-white border-2 border-[#B8FFC7] rounded-full flex justify-center items-center w-20 h-20">
              <img src={piano} alt="" className="w-8 h-8" />
            </div>
          </div>

          <div className="luciole7">
            <div className="bg-white border-2 border-[#B8FFC7] rounded-full flex justify-center items-center w-20 h-20">
              <img src={photo} alt="" className="w-8 h-8" />
            </div>
          </div>

          <div className="luciole7">
            <div className="bg-white border-2 border-[#B8FFC7] rounded-full flex justify-center items-center w-20 h-20">
              <img src={book} alt="" className="w-8 h-8" />
            </div>
          </div>
        </div>

        <div className="h-1 w-[100%] bg-[#B8FFC7] mt-14 rounded-full"></div>

        <h2 className="text-center text-2xl text-white font-bold mt-4">
          Mes objectifs
        </h2>

        <div className="flex flex-col mt-10 gap-6 divicondev">
          <div className=" flex justify-center flex-col bg-white relative rounded-lg border-[3px] border-[#E4E4E4] parentdivetudes1">
            <div className="flex justify-center">
              <img src={nextjslogo} alt="" className="h-32 w-32" />
            </div>
            <p className="text-center font-bold">Nextjs</p>

            <div className="h-1 w-[80%] bg-[#E4E4E4] mx-auto mt-1 rounded-full separateurd1"></div>

            <div className="flex justify-center">
              <p className="text-sm text-justify p-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
                sed adipisci doloremque, nostrum quia repellat saepe iusto eaque
                laboriosam voluptas!
              </p>
            </div>
          </div>

          <div className=" flex justify-center flex-col bg-white relative rounded-lg border-[3px] border-[#E4E4E4] parentdivetudes1">
            <div className="flex justify-center">
              <img src={nodejsicon} alt="" className="h-24 w-24" />
            </div>

            <p className="text-center font-bold mt-4">Nodejs</p>

            <div className="h-1 w-[80%] bg-[#E4E4E4] mx-auto mt-1 rounded-full separateurd1"></div>

            <div className="flex justify-center">
              <p className="text-sm text-justify p-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
                sed adipisci doloremque, nostrum quia repellat saepe iusto eaque
                laboriosam voluptas!
              </p>
            </div>
          </div>
        </div>

        <footer
          className="h-20 w-[100%] bg-[#B8FFC7] mt-10 rounded-lg flex flex-col py-4 px-4 mb-8 justify-center gap-2 luciole8"
          id="contact"
        >
          <div className="flex gap-2 items-center">
            <img src={mailicon} alt="" className="w-6 h-6" />
            <p className="text-[12px]">maxime.prevot1804kz@gmail.com</p>
          </div>

          <div className="flex gap-2 items-center">
            <img src={telicon} alt="" className="w-6 h-6" />
            <p className="text-[12px]">07 81 78 72 72</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Mainlayout;
