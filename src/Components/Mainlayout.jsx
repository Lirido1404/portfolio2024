import React, { useEffect, useState } from "react";
import "../Components/Mainlayout.css";
import photomp from "../Images/mpbut24.png";
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

import piano from "../Images/main/pianoicon.svg";
import photo from "../Images/main/photoicon.svg";
import book from "../Images/main/bookicon.svg";

import nextjslogo from "../Images/main/Nexticon.svg";
import nodejsicon from "../Images/main/Nodejsicon.svg";

import mailicon from "../Images/main/mailicon.png";
import telicon from "../Images/main/telicon.png";
import JeuxTypeMario from "../Pages/JeuxTypeMario";

import { FaDownload } from "react-icons/fa";
import CV from "../Images/CV_MP.pdf";

import typescript from "../Images/main/typescript.svg";
import star from "../Images/star.svg";
import photomaxime2 from "../Images/main/Photomax/p6.jpg";
import football from "../Images/main/football2.svg";
import nextjslogoo from "../Images/nextjslogoo.png";

function Mainlayout() {
  const [showReals, setShowReals] = useState(false);
  const [showStar, setShowStar] = useState(false);
  const [imgIsClicked, setImgIsClicked] = useState(false);
  const [photoOverForBorder, setPhotoOverForBorder] = useState(false);

  const handleBorderPhoto = () => {
    setPhotoOverForBorder(true);
  };

  const handleNotBorderPhoto = () => {
    setPhotoOverForBorder(false);
  };

  const handleShowStar = () => {
    setShowStar(true);
  };

  const handleNotShowStar = () => {
    setShowStar(false);
  };

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

  const [photoIsOver, setPhotoIsOver] = useState(false);

  const handlePhotoAnim = () => {
    setPhotoIsOver(!photoIsOver);
    console.log(photoIsOver);
  };

  const photos = [
    require("../Images/main/Photomax/p1.png"),
    require("../Images/main/Photomax/p2.jpg"),
    require("../Images/main/Photomax/p3.jpg"),
    require("../Images/main/Photomax/p4.png"),
    require("../Images/main/Photomax/p5.jpg"),
    require("../Images/main/Photomax/p6.jpg"),
  ];

  function getRandomPhoto() {
    const randomIndex = Math.floor(Math.random() * photos.length);
    return photos[randomIndex];
  }

  const [randomPhoto, setRandomPhoto] = useState(getRandomPhoto());

  function handleImgClick() {
    setRandomPhoto(getRandomPhoto());
    setImgIsClicked(true);
  }

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
                Salut, moi c'est Maxime Prévot, un jeune passionné par le
                développement web basé en France, sur Paris 📍
              </h2>
              <div className="flex gap-6 mt-6 logores">
                <a
                  href="https://www.linkedin.com/in/maxime-pr%C3%A9vot-b286ba250/"
                  target="blank"
                >
                  <img
                    src={linkedIn}
                    alt=""
                    draggable={false}
                    className="imgres"
                  />
                </a>
                <a href="https://github.com/Lirido1404" target="blank">
                  <img
                    src={githublogo}
                    alt=""
                    draggable={false}
                    className="imgres"
                  />
                </a>
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
                    src={"/nextjslogoo.png"}
                    alt=""
                    className="w-14 h-14 lg:w-18 lg:h-18"
                    draggable={false}
                  />
                  <img
                    src={reactlogo}
                    alt=""
                    className="w-14 h-14 lg:w-18 lg:h-18"
                    draggable={false}
                  />
                  <img
                    src={angular}
                    alt=""
                    className="w-16 h-16"
                    draggable={false}
                  />
                  <img
                    src={"/typescriptt.png"}
                    alt=""
                    className="w-14 h-14 lg:w-18 lg:h-18"
                    draggable={false}
                  />
                  <img
                    src={tailwindlogo}
                    alt=""
                    className="w-16 h-16"
                    draggable={false}
                  />
                  <img
                    src={"/framer-motion.svg"}
                    alt=""
                    className="w-14 h-14 lg:w-18 lg:h-18"
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
                    src={"symfonylogoo1.png"}
                    alt=""
                    className="w-16 h-16"
                    draggable={false}
                  />
                  <img
                    src={phplogo}
                    alt=""
                    className="w-16 h-16"
                    draggable={false}
                  />
                  <img
                    src={sqllogo}
                    alt=""
                    className="w-16 h-16"
                    draggable={false}
                  />
                  <img
                    src={nodejsicon}
                    alt=""
                    className="w-14 h-14"
                    draggable={false}
                  />
                  <img
                    src={"/mongoodb.svg"}
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
          <h3 className="lg:text-7xl text-2xl text-white text-center font-bold projetstext">
            Mes projets
          </h3>
        </div>

        <div className="mt-20 sectionReal1">
          <div className="petitesectionReal1">
            <div className="real1sectiondroite hidden lg:flex">
              <div>
                <h3 className="text-lg text-white text-center TitreReal1">
                  Site d'association
                </h3>
                <h3 className="text-center text-white italic TitreReal2">
                  HameauGaulois
                </h3>
              </div>
              <div className="">
                <div className="mt-6 flex justify-center texteReal1">
                  <p className="text-justify text-white">
                    Le HameauGaulois est un site qui a pour objectif d'informer.
                    C'est une sorte de site vitrine. Ce site possède une gestion
                    des utilisateurs pour avoir la main sur un gestionnaire
                    d'évènement.
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-4 cta1 gap-4 items-center">
                <Link to="/Digi4All">
                  <button className="bg-[#B8FFC7] px-8 py-1  rounded border-1 border-[#EDEDED] btncta">
                    <p className="text-sm  lg:text-xl font-bold opacity-90  ">
                      En savoir +
                    </p>
                  </button>
                </Link>
                <Link to="https://hameau-gaulois.vercel.app/" target="blank">
                  <button className="bg-[#B8FFC7] px-8 py-1  rounded border-1 border-[#EDEDED] btncta">
                    <p className="text-sm  lg:text-xl font-bold opacity-90  ">
                      Accéder au projet
                    </p>
                  </button>
                </Link>
              </div>
            </div>
            <div className=" real1sectiongauche">
              <div className="relative justify-center flex mt-8 luciole3 ">
                <img
                  src={"/AHG.png"}
                  alt=""
                  className="rounded-lg border-2 border-[#B8FFC7] "
                  draggable={false}
                />
                <div className=" absolute right-2 bottom-2 flex gap-1">
                  <div className="p-2 h-8 border-2 bg-white border-[#B8FFC7] rounded-full flex items-center gap-2">
                    <span>
                      <img src={"/profilsvg1.svg"} className="w-5 h-5" alt="" />
                    </span>
                    <p className="text-sm font-bold hidden lg:flex">
                      Personnel
                    </p>
                  </div>
                  <div className="p-2 h-8 border-2 bg-white border-[#B8FFC7] rounded-full flex items-center gap-2">
                    <span>
                      <img src={"/timee.svg"} className="w-5 h-5" alt="" />
                    </span>
                    <p className="text-sm font-bold hidden lg:flex">En cours</p>
                  </div>
                  <div className="p-2 h-8 border-2 bg-white  border-[#B8FFC7] rounded-full flex items-center gap-2">
                    <img src={"/typescriptt.png"} className="w-5 h-5" alt="" />
                    <img src={"/nextjslogoo.png"} className="w-5 h-5" alt="" />
                    <img
                      src={"/Nodejsiconnoire.png"}
                      className="w-5 h-5"
                      alt=""
                    />
                    <img src={"/mongoodb.svg"} className="w-5 h-5" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="real1sectiondroite block lg:hidden  ">
              <div>
                <h3 className="text-lg text-white text-center TitreReal1">
                  Site d'association
                </h3>
                <h3 className="text-center text-white italic TitreReal2">
                  HameauGaulois
                </h3>
              </div>
              <div className="">
                <div className="mt-6 flex justify-center texteReal1">
                  <p className="text-justify text-white">
                    Le HameauGaulois est un site qui a pour objectif d'informer.
                    C'est une sorte de site vitrine. Ce site possède une gestion
                    des utilisateurs pour avoir la main sur un gestionnaire
                    d'évènement.
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-4 cta1 gap-4 items-center">
                <Link to="/Digi4All">
                  <button className="bg-[#B8FFC7] px-8 py-1  rounded border-1 border-[#EDEDED] btncta">
                    <p className="text-sm  lg:text-xl font-bold opacity-90  ">
                      En savoir +
                    </p>
                  </button>
                </Link>
                <Link to="https://hameau-gaulois.vercel.app/" target="blank">
                  <button className="bg-[#B8FFC7] px-8 py-1  rounded border-1 border-[#EDEDED] btncta">
                    <p className="text-sm  lg:text-xl font-bold opacity-90  ">
                      Accéder au projet
                    </p>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 sectionReal1">
          <div className="petitesectionReal1">
            <div className=" real1sectiongauche">
              <div className="relative justify-center flex mt-8 luciole3 ">
                <img
                  src={"/RFTCars.png"}
                  alt=""
                  className="rounded-lg border-2 border-[#B8FFC7] "
                  draggable={false}
                />
                <div className=" absolute right-2 bottom-2 flex gap-1">
                  <div className="p-2 h-8 border-2 bg-[#B8FFC7] border-white rounded-full flex items-center gap-2">
                    <span>
                      <img src={"/profilsvg1.svg"} className="w-5 h-5" alt="" />
                    </span>
                    <p className="text-sm font-bold hidden lg:flex">
                      Personnel
                    </p>
                  </div>
                  <div className="p-2 h-8 border-2 bg-[#B8FFC7] border-white rounded-full flex items-center gap-2">
                    <span>
                      <img src={"/pausee.svg"} className="w-5 h-5" alt="" />
                    </span>
                    <p className="text-sm font-bold hidden lg:flex">En pause</p>
                  </div>
                  <div className="p-2 h-8 border-2 bg-[#B8FFC7] border-white rounded-full flex items-center gap-2">
                    <img src={"/typescriptt.png"} className="w-5 h-5" alt="" />
                    <img src={"/nextjslogoo.png"} className="w-5 h-5" alt="" />
                    <img
                      src={"/Nodejsiconnoire.png"}
                      className="w-5 h-5"
                      alt=""
                    />
                    <img src={"/mongoodb.svg"} className="w-5 h-5" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="real1sectiondroite ">
              <div>
                <h3 className="text-lg text-white text-center TitreReal1">
                  E-Commerce
                </h3>
                <h3 className="text-center text-white italic TitreReal2">
                  RFT Cars
                </h3>
              </div>
              <div className="">
                <div className="mt-6 flex justify-center texteReal1">
                  <p className="text-justify text-white">
                    RFT est une marque fictive que j'ai crée pour ce projet
                    d'entrainement, ce dernier m'a permis d'apprendre le
                    framework NextJS. Les fonctionnalités principales d'un site
                    E-Commerce fonctionnent (Ajout d'avis, redirection vers page
                    produit avec informations provenants d'une BDD etc...)
                  </p>
                </div>
                <div className="flex justify-center mt-4 cta1 gap-4 items-center">
                  <Link to="/Digi4All">
                    <button className="bg-[#B8FFC7] px-8 py-1  rounded border-1 border-[#EDEDED] btncta">
                      <p className="text-sm  lg:text-xl font-bold opacity-90  ">
                        En savoir +
                      </p>
                    </button>
                  </Link>
                  <Link to="https://rft-4-ts2.vercel.app/" target="blank">
                    <button className="bg-[#B8FFC7] px-8 py-1  rounded border-1 border-[#EDEDED] btncta">
                      <p className="text-sm  lg:text-xl font-bold opacity-90  ">
                        Accéder au projet
                      </p>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 sectionReal1 sectionReal2">
          <div className="petitesectionReal1">
            <div className="real1sectiondroite  hidden lg:flex">
              <div>
                <h3 className="text-lg text-white text-center TitreReal1">
                  Répertoire de contact
                </h3>
                <h3 className="text-center text-white italic TitreReal2">
                  Contact-App{" "}
                </h3>
              </div>
              <div className="">
                <div className="mt-6 flex justify-center texteReal1">
                  <p className="text-justify text-white">
                    La Contact-App est une webApp responsive qui repose sur le
                    CRUD. Au-delà du CRUD, j'ai appris à manier les systèmes de
                    session avec Next-Auth, ce dernier package m'a permit
                    d'utiliser des API google et Github pour obtenir un système
                    d'authentification complexe et userfriendly.
                  </p>
                </div>
                <div className="flex justify-center mt-4 cta1 gap-4 items-center">
                  <Link to="/Digi4All">
                    <button className="bg-[#B8FFC7] px-8 py-1  rounded border-1 border-[#EDEDED] btncta">
                      <p className="text-sm lg:text-xl font-bold opacity-90  ">
                        En savoir +
                      </p>
                    </button>
                  </Link>
                  <Link
                    to="https://contact-app-ivory-rho.vercel.app/"
                    target="blank"
                  >
                    <button className="bg-[#B8FFC7] px-8 py-1  rounded border-1 border-[#EDEDED] btncta">
                      <p className="text-sm lg:text-xl font-bold opacity-90  ">
                        Accéder au projet
                      </p>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className=" real1sectiongauche  ">
              <div className="relative justify-center flex mt-8 luciole4 ">
                <img
                  src={"/Contact-App.png"}
                  alt=""
                  className="rounded-lg border-2 border-[#B8FFC7] "
                  draggable={false}
                />
                <div className=" absolute right-2 bottom-2 flex gap-1">
                  <div className="p-2 h-8 border-2 bg-white border-[#B8FFC7] rounded-full flex items-center gap-2">
                    <span>
                      <img src={"/school.svg"} className="w-5 h-5" alt="" />
                    </span>
                    <p className="text-sm font-bold hidden lg:flex">Scolaire</p>
                  </div>
                  <div className="p-2 h-8 border-2 bg-white border-[#B8FFC7] rounded-full flex items-center gap-2">
                    <span>
                      <img src={"/checkk.svg"} className="w-5 h-5" alt="" />
                    </span>
                    <p className="text-sm font-bold hidden lg:flex">Terminé</p>
                  </div>
                  <div className="p-2 h-8 border-2 bg-white  border-[#B8FFC7] rounded-full flex items-center gap-2">
                    <img src={javascriptlogo} className="w-5 h-5" alt="" />
                    <img src={"/nextjslogoo.png"} className="w-5 h-5" alt="" />
                    <img
                      src={"/Nodejsiconnoire.png"}
                      className="w-5 h-5"
                      alt=""
                    />
                    <img src={"/mongoodb.svg"} className="w-5 h-5" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="real1sectiondroite block lg:hidden ">
              <div>
                <h3 className="text-lg text-white text-center TitreReal1">
                  Répertoire de contact
                </h3>
                <h3 className="text-center text-white italic TitreReal2">
                  Contact-App{" "}
                </h3>
              </div>
              <div className="">
                <div className="mt-6 flex justify-center texteReal1">
                  <p className="text-justify text-white">
                    La Contact-App est une webApp responsive qui repose sur le
                    CRUD. Au-delà du CRUD, j'ai appris à manier les systèmes de
                    session avec Next-Auth, ce dernier package m'a permit
                    d'utiliser des API google et Github pour obtenir un système
                    d'authentification complexe et userfriendly.
                  </p>
                </div>
                <div className="flex justify-center mt-4 cta1 gap-4 items-center">
                  <Link to="/Digi4All">
                    <button className="bg-[#B8FFC7] px-8 py-1  rounded border-1 border-[#EDEDED] btncta">
                      <p className="text-sm lg:text-xl font-bold opacity-90  ">
                        En savoir +
                      </p>
                    </button>
                  </Link>
                  <Link
                    to="https://contact-app-ivory-rho.vercel.app/"
                    target="blank"
                  >
                    <button className="bg-[#B8FFC7] px-8 py-1  rounded border-1 border-[#EDEDED] btncta">
                      <p className="text-sm lg:text-xl font-bold opacity-90  ">
                        Accéder au projet
                      </p>
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
                <p className="text-sm lg:text-xl font-bold opacity-90  text-[#08262E] ">
                  + de projets
                </p>
              </button>
            </div>
          </>
        )}

        {showReals && (
          <>
            <div className="reqAjax" id="real5">
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
                      <div className=" absolute right-2 bottom-2 flex gap-1">
                        <div className="p-2 h-8 border-2 bg-[#B8FFC7] border-white rounded-full flex items-center gap-2">
                          <span>
                            <img
                              src={"/school.svg"}
                              className="w-5 h-5"
                              alt=""
                            />
                          </span>
                          <p className="text-sm font-bold hidden lg:flex">
                            Scolaire
                          </p>
                        </div>
                        <div className="p-2 h-8 border-2 bg-[#B8FFC7] border-white rounded-full flex items-center gap-2">
                          <span>
                            <img
                              src={"/checkk.svg"}
                              className="w-5 h-5"
                              alt=""
                            />
                          </span>
                          <p className="text-sm font-bold hidden lg:flex">
                            Terminé
                          </p>
                        </div>
                        <div className="p-2 h-8 border-2 bg-[#B8FFC7] border-white rounded-full flex items-center gap-2">
                          <img
                            src={javascriptlogo}
                            className="w-5 h-5"
                            alt=""
                          />
                          <img src={reactlogo} className="w-5 h-5" alt="" />
                          <img
                            src={"/threejss.png"}
                            className="w-5 h-5"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="real1sectiondroite ">
                    <div>
                      <h3 className="text-lg text-white text-center TitreReal1">
                        Datavisualisation
                      </h3>
                      <h3 className="text-center text-white italic TitreReal2">
                        Covid-19 Tracker
                      </h3>
                    </div>
                    <div className="">
                      <div className="mt-6 flex justify-center texteReal1">
                        <p className="text-justify text-white">
                          Ce site web est lié à une API publique qui permet de
                          récolter des données sur le Covid-19. A partir de ces
                          données, je crée des graphs en utilisants des
                          librairies de création de graphs, et j'utilise des
                          mathématiques pour en tirer certaines conclusions /
                          constats. J'ai aussi pu essayer de faire de la 3D avec
                          Three.js
                        </p>
                      </div>
                      <div className="flex justify-center mt-4 cta1 gap-4 items-center">
                        <Link to="/Digi4All">
                          <button className="bg-[#B8FFC7] px-8 py-1  rounded border-1 border-[#EDEDED] btncta">
                            <p className="text-sm lg:text-xl font-bold opacity-90  ">
                              En savoir +
                            </p>
                          </button>
                        </Link>
                        <Link
                          to="https://shiny-alpaca-e24526.netlify.app/"
                          target="blank"
                        >
                          <button className="bg-[#B8FFC7] px-8 py-1  rounded border-1 border-[#EDEDED] btncta">
                            <p className="text-sm lg:text-xl font-bold opacity-90  ">
                              Accéder au projet
                            </p>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="reqMario">
              <div className="mt-20 sectionReal1 sectionReal2">
                <div className="petitesectionReal1">
                  <div className="real1sectiondroite hidden lg:flex ">
                    <div>
                      <h3 className="text-lg text-white text-center TitreReal1">
                        Webdocumentaire
                      </h3>
                      <h3 className="text-center text-white italic TitreReal2">
                        Au delà du swipe
                      </h3>
                    </div>
                    <div className="">
                      <div className="mt-6 flex justify-center texteReal1">
                        <p className="text-justify text-white">
                          Ce webdocumentaire a pour but d'être dynamique afin
                          d'immerger le visiteur. J'ai alors crée plusieurs
                          systèmes de mini-jeux pour rendre l'expérience
                          interactive. L'immersion est basé sur un système de
                          swipe au fil de l'experience et d'attribution de
                          score.
                        </p>
                      </div>
                      <div className="flex justify-center mt-4 cta1 gap-4 items-center">
                        <Link to="/Digi4All">
                          <button className="bg-[#B8FFC7] px-8 py-1  rounded border-1 border-[#EDEDED] btncta">
                            <p className="text-sm lg:text-xl font-bold opacity-90  ">
                              En savoir +
                            </p>
                          </button>
                        </Link>
                        <Link
                          to="https://magical-sopapillas-4fc9b2.netlify.app/"
                          target="blank"
                        >
                          <button className="bg-[#B8FFC7] px-8 py-1  rounded border-1 border-[#EDEDED] btncta">
                            <p className="text-sm lg:text-xl font-bold opacity-90  ">
                              Accéder au projet
                            </p>
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
                      <div className=" absolute right-2 bottom-2 flex gap-1">
                        <div className="p-2 h-8 border-2 bg-white border-[#B8FFC7] rounded-full flex items-center gap-2">
                          <span>
                            <img
                              src={"/school.svg"}
                              className="w-5 h-5"
                              alt=""
                            />
                          </span>
                          <p className="text-sm font-bold hidden lg:flex">
                            Scolaire
                          </p>
                        </div>
                        <div className="p-2 h-8 border-2 bg-white border-[#B8FFC7] rounded-full flex items-center gap-2">
                          <span>
                            <img
                              src={"/checkk.svg"}
                              className="w-5 h-5"
                              alt=""
                            />
                          </span>
                          <p className="text-sm font-bold hidden lg:flex">
                            Terminé
                          </p>
                        </div>
                        <div className="p-2 h-8 border-2 bg-white  border-[#B8FFC7] rounded-full flex items-center gap-2">
                          <img
                            src={javascriptlogo}
                            className="w-5 h-5"
                            alt=""
                          />
                          <img src={reactlogo} className="w-5 h-5" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="real1sectiondroite  lg:hidden block">
                    <div>
                      <h3 className="text-lg text-white text-center TitreReal1">
                        Webdocumentaire
                      </h3>
                      <h3 className="text-center text-white italic TitreReal2">
                        Au delà du swipe
                      </h3>
                    </div>
                    <div className="">
                      <div className="mt-6 flex justify-center texteReal1">
                        <p className="text-justify text-white">
                          Ce webdocumentaire a pour but d'être dynamique afin
                          d'immerger le visiteur. J'ai alors crée plusieurs
                          systèmes de mini-jeux pour rendre l'expérience
                          interactive. L'immersion est basé sur un système de
                          swipe au fil de l'experience et d'attribution de
                          score.
                        </p>
                      </div>
                      <div className="flex justify-center mt-4 cta1 gap-4 items-center">
                        <Link to="/Digi4All">
                          <button className="bg-[#B8FFC7] px-8 py-1  rounded border-1 border-[#EDEDED] btncta">
                            <p className="text-sm lg:text-xl font-bold opacity-90  ">
                              En savoir +
                            </p>
                          </button>
                        </Link>
                        <Link
                          to="https://magical-sopapillas-4fc9b2.netlify.app/"
                          target="blank"
                        >
                          <button className="bg-[#B8FFC7] px-8 py-1  rounded border-1 border-[#EDEDED] btncta">
                            <p className="text-sm lg:text-xl font-bold opacity-90  ">
                              Accéder au projet
                            </p>
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
          className="text-center text-2xl mt-4 text-white font-bold etudestitre "
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
                (<span>M</span>étiers du <span>M</span>ultimédia et de l'
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

        <div className="h-1 w-[100%] bg-[#B8FFC7] mt-14 rounded-full sepetudes"></div>

        <div className="flex flex-col gap-8 mt-4 sectionpres">
        <div className="flex justify-center items-center sectionphotomp2 w-full h-full mt-14 lg:hidden">
              <motion.img
                src={imgIsClicked ? randomPhoto : photomaxime2}
                key={randomPhoto}
                alt=""
                className="w-[300px] h-[300px] rounded-full border-2 border-[#B8FFC7] imgsoleilmp imgeffect"
                whileHover={{ scale: 1.1 }} // Appliquer l'effet de scale au survol
                transition={{ duration: 0.5 }} // Définir la durée de la transition
              />
            </div>
          <div className="sectionprestt flex flex-col justify-between h-full w-full ">
            <div className="sectionpresdroite ">
              <h2 className="text-center text-2xl text-white font-bold textbsecpres2 mt-2">
                A propos de moi
              </h2>
              <div className="flex flex-col sectiontextpres flex-wrap mt-6">
                <p className="text-xl text-justify text-white textpresmp2">
                  Je suis actuellement étudiant en deuxième année de BUT MMI,
                  avec pour ambition d'intégrer une école d'ingénieur afin de
                  devenir développeur full-stack. Mon objectif ultime est de
                  concevoir des systèmes automatisés, qu'ils soient mécaniques
                  ou numériques. <br />
                  <br /> Ce qui me passionne dans le domaine de l'informatique,
                  c'est l'opportunité constante d'apprendre et d'explorer de
                  nouveaux horizons. Je suis motivé par le défi de créer des
                  systèmes complexes, en bref, innover.
                </p>
                <p className="text-xl text-justify text-white textpresmp2"></p>
                <div className="flex justify-center btncv">
                  <a href={CV} download type="btn">
                    <button className="bg-[#B8FFC7] px-8 py-1  rounded border-1 border-[#EDEDED] btncta flex justify-center gap-2 items-center">
                      <FaDownload />
                      <p className="font-bold">CV</p>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className=" justify-center items-center sectionphotomp2 w-full h-full mt-14 hidden lg:flex ">
              <motion.img
                src={imgIsClicked ? randomPhoto : photomaxime2}
                key={randomPhoto}
                alt=""
                className="w-[300px] h-[300px] rounded-full border-2 border-[#B8FFC7] imgsoleilmp imgeffect"
                whileHover={{ scale: 1.1 }} // Appliquer l'effet de scale au survol
                transition={{ duration: 0.5 }} // Définir la durée de la transition
              />
            </div>
          </div>
        </div>

        <div className="h-1 w-[100%] bg-[#B8FFC7] mt-14 rounded-full"></div>

        <h2 className="text-center text-2xl text-white font-bold mt-4 textpassionss">
          Mes passions
        </h2>

        <div className="flex gap-4 justify-center mt-6 ensemblepassions">
          <motion.div
            className="luciole7"
            drag
            dragConstraints={{ left: -30, top: -30, right: 30, bottom: 30 }}
          >
            <div className="bg-white border-2 border-[#B8FFC7] rounded-full flex justify-center items-center w-20 h-20 imgpassions cursor-pointer">
              <img
                src={piano}
                alt=""
                className="w-8 h-8 imgpassions2"
                draggable="false"
              />
            </div>
          </motion.div>

          <div className="flex flex-col">
            <motion.div
              className="luciole7 relative"
              drag
              dragConstraints={{ left: -30, top: -30, right: 30, bottom: 30 }}
              onClick={handleImgClick}
              onMouseUp={handleNotShowStar}
              onMouseDown={handleShowStar}
              onMouseEnter={handleBorderPhoto}
              onMouseOut={handleNotBorderPhoto}
            >
              <div
                className="bg-white border-2 border-[#B8FFC7] rounded-full flex justify-center items-center w-20 h-20 imgpassions relative cursor-pointer hover:bg-[#B8FFC7] hover:border-2 hover:border-white ease-out duration-500"
                onClick={handleImgClick}
                onMouseEnter={handleBorderPhoto}
                onMouseOut={handleNotBorderPhoto}
              >
                <img
                  src={photo}
                  alt=""
                  className="w-8 h-8 imgpassions2"
                  draggable="false"
                  onClick={handleImgClick}
                  onMouseEnter={handleBorderPhoto}
                  onMouseOut={handleNotBorderPhoto}
                />
                <div
                  className={`absolute top-[-15px] right-0 rounded-full border-2 ${
                    photoOverForBorder ? "border-white" : "border-[#B8FFC7]"
                  } overflow-hidden fondimg`}
                  onMouseEnter={handleBorderPhoto}
                  onMouseOut={handleNotBorderPhoto}
                >
                  <motion.img
                    key={randomPhoto}
                    src={randomPhoto}
                    transition={{ duration: 0.5 }}
                    alt=""
                    className="w-12 h-12 object-cover imgeffect"
                    onMouseEnter={handleBorderPhoto}
                    onMouseOut={handleNotBorderPhoto}
                  />
                </div>
                {showStar && (
                  <>
                    <div className="absolute top-6 left-6 scaleee">
                      <img src={star} alt="" className="w-8 h-8 " />
                    </div>
                  </>
                )}
              </div>

              <p className="text-center text-white font-bold mt-2">Click !</p>
            </motion.div>
          </div>

          <motion.div
            className="luciole7"
            drag
            dragConstraints={{ left: -30, top: -30, right: 30, bottom: 30 }}
          >
            <div className="bg-white border-2 border-[#B8FFC7] rounded-full flex justify-center items-center w-20 h-20 imgpassions cursor-pointer">
              <img
                src={football}
                alt=""
                className="w-12 h-12 imgpassions2"
                draggable="false"
              />
            </div>
          </motion.div>
        </div>

        <div className="h-1 w-[100%] bg-[#B8FFC7] mt-14 rounded-full sepetudes"></div>

        <h2 className="text-center text-2xl text-white font-bold mt-4 textpassionss">
          Mes objectifs proches
        </h2>

        <div className="flex flex-col mt-10 gap-6 divicondev">
          <div className=" flex justify-center flex-col bg-white relative rounded-lg border-[3px] border-[#E4E4E4] parentdivetudes1">
            <div className="flex justify-center items-center">
              <span className="flex flex-col">
                <img src={reactlogo} alt="" className="h-32 w-32" />
                <p className="text-center font-bold text-black">React Native</p>
              </span>
            </div>

            <div className="h-1 w-[80%] bg-[#E4E4E4] mx-auto mt-1 rounded-full separateurd1"></div>

            <div className="flex justify-center">
              <p className="text-sm text-justify p-4">
                Au-delà des sites web, j'aimerai être capable de réaliser des
                applications complètes. J'aime beaucoup le concept de fluidité
                qu'on peut retrouver dans les applications modernes, mon
                objectifs est de réaliser des applications avec ce même niveau
                de performance et de fluidité.
              </p>
            </div>
          </div>

          <div className=" flex justify-center flex-col bg-white relative rounded-lg border-[3px] border-[#E4E4E4] parentdivetudes1">
            <div className="flex justify-center mt-2">
              <img src={"/pythonlogoo.png"} alt="" className="h-24 w-24" />
            </div>

            <p className="text-center font-bold mt-4">Python</p>

            <div className="h-1 w-[80%] bg-[#E4E4E4] mx-auto mt-1 rounded-full separateurd1"></div>

            <div className="flex justify-center">
              <p className="text-sm text-justify p-4">
                J'aimerai vraiment m'améliorer en algorithmie, je suis persuadé
                que ce domaine me permettra de mieux comprendre l'univers du
                code, et qu'il me permettra par la suite de proposer des
                solutions sur-mesures à des problèmes spécifiques. Je n'aurai
                plus besoin de demander de l'aide à ChatGPT pour résoudre des
                problèmes simples.
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
            <p className="text-[12px] contactp">
              maxime.prevot1804kz@gmail.com
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <img src={telicon} alt="" className="w-6 h-6" />
            <p className="text-[12px] contactp">07 81 78 72 72</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Mainlayout;
