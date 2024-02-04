import React from 'react'
import Mainlayout from '../Components/Mainlayout'
import Navbar from '../Components/Navbar'
import NavbarMobile from '../Components/NavbarMobile'
import { motion } from 'framer-motion';

function HomePage() {
  return (
    <motion.div initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} exit={{opacity:0,x:20}} transition={{duration:0.3}}> 
        <Mainlayout/> 
        <Navbar/>
        <NavbarMobile/>
    </motion.div>
  )
}

export default HomePage