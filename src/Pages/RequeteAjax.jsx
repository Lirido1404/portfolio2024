import React from 'react'
import { TbArrowBackUp } from "react-icons/tb";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
function RequeteAjax() {
  return (
    <motion.div className='' initial={{width:0, opacity:0}} animate={{width: "100%", opacity:1}} exit={{x: window.innerWidth, transition: {duration: 0.1}, opacity:0}}>
        <div className='flex justify-between items-center bg-white border-b-4 border-[#B8FFC7] p-4'>
          <h1 className='text-2xl font-bold'>
            Requêtes Ajax
          </h1>

          <Link to="/">
          <div className='bg-[#303030] border-4 p-1 rounded-lg border-[#B8FFC7]'>
            <TbArrowBackUp size={25} color='white'/>

          </div>
          </Link>
        </div>
    </motion.div>
  )
}

export default RequeteAjax