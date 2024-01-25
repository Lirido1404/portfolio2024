import React, { useEffect, useState } from 'react';
import home from "../Images/homesvg1.svg";
import computer from "../Images/computersvg1.svg";
import profilim from "../Images/profilsvg1.svg";
import mail from "../Images/mailsvg1.svg";
import "./Nav.css";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [homeHover, setHomeHover] = useState(false);
  const [computerHover, setComputerHover] = useState(false);
  const [profilHover, setProfilHover] = useState(false);
  const [mailHover, setMailHover] = useState(false);






  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setShow(false);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastScrollY]);











  const togleHomeHover = () => {
    setHomeHover(true);
  }

  const togleComputerHover = () => {
    setComputerHover(true);
  }

  const togleProfilHover = () => {
    setProfilHover(true);
  }

  const togleMailHover = () => {
    setMailHover(true);
  }

  const togleHomeHover2 = () => {
    setHomeHover(false);
  }

  const togleComputerHover2 = () => {
    setComputerHover(false);
  }

  const togleProfilHover2 = () => {
    setProfilHover(false);
  }

  const togleMailHover2 = () => {
    setMailHover(false);
  }

  const returnTextNav = () => {
    return (
      <AnimatePresence exitBeforeEnter={false} mode='wait'>
        {homeHover && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            className='text-center font-bold textnavv mt-2 text-lg'
          >
            Accueil
          </motion.div>
        )}
        {computerHover && (
          <motion.div
            key="computer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            className='text-center font-bold textnavv mt-2 text-lg'
          >
            Réalisations
          </motion.div>
        )}
        {profilHover && (
          <motion.div
            key="profil"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            className='text-center font-bold textnavv mt-2 text-lg'
          >
            Parcours
          </motion.div>
        )}
        {mailHover && (
          <motion.div
            key="mail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            className='text-center font-bold textnavv mt-2 text-lg'
          >
            Contact
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return (
    <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 ${show ? "makeitvisible" : "hideit"}`}>
      <nav className='navv rounded-lg'>
        <ul className='flex justify-center py-2 px-4 gap-4 items-center'>
          <li className='border-[3px] border-white p-1 rounded-md cursor-pointer' onMouseEnter={togleHomeHover} onMouseOut={togleHomeHover2}>
            <img src={home} alt="" onMouseEnter={togleHomeHover} onMouseOut={togleHomeHover2} />
          </li>
          <li className='border-[3px] border-white p-1 rounded-md cursor-pointer' onMouseEnter={togleComputerHover} onMouseOut={togleComputerHover2}>
            <img src={computer} alt="" onMouseEnter={togleComputerHover} onMouseOut={togleComputerHover2} />
          </li>
          <li className='border-[3px] border-white p-1 rounded-md cursor-pointer'onMouseEnter={togleProfilHover} onMouseOut={togleProfilHover2} >
            <img src={profilim} alt="" onMouseEnter={togleProfilHover} onMouseOut={togleProfilHover2} />
          </li>
          <li className='border-[3px] border-white p-1 rounded-md cursor-pointer' onMouseEnter={togleMailHover} onMouseOut={togleMailHover2}>
            <img src={mail} alt="" onMouseEnter={togleMailHover} onMouseOut={togleMailHover2} />
          </li>
        </ul>
      </nav>
      {returnTextNav()}
    </div>
  )
}

export default Navbar;
