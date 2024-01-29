import React from 'react'
import Mainlayout from '../Components/Mainlayout'
import Navbar from '../Components/Navbar'
import NavbarMobile from '../Components/NavbarMobile'
import { motion } from 'framer-motion';

function HomePage() {
  return (
    <motion.div initial={{width:0, opacity:0}} animate={{width: "100%", opacity:1}} exit={{x: window.innerWidth, transition: {duration: 0.1}, opacity:0}}> 
        <Mainlayout/> 
        <Navbar/>
        <NavbarMobile/>
    </motion.div>
  )
}

export default HomePage