import React from 'react'
import Mainlayout from '../Components/Mainlayout'
import Navbar from '../Components/Navbar'
import NavbarMobile from '../Components/NavbarMobile'
import { motion } from 'framer-motion';

function HomePage() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}> 
        <Mainlayout/> 
        <Navbar/>
        <NavbarMobile/>
    </motion.div>
  )
}

export default HomePage