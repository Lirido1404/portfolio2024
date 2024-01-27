import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import "./NavbarMobile.css";


function NavbarMobile() {
    const [toggleMenu,setToggleMenu] = useState(false);

    const handleToggleMenu = ()=>{
        setToggleMenu(!toggleMenu);
    }
   
  return (
    <div className='hidden navmob1'>
        <div className={`h-[100vh] bg-[#08262E] fixed top-0 w-[100%] ${toggleMenu ? " " : "atransform"} menunavmob`}>
            <div className='w-[70%] mx-auto  p-4 mt-40 divbord'>
                <h2 className='text-center text-3xl text-white font-bold'>Accueil</h2>
            </div>
            <div className='w-[70%] mx-auto  p-4 mt-28 divbord'>
                <h2 className='text-center text-3xl text-white font-bold'>Réalisations</h2>
            </div>
            <div className='w-[70%] mx-auto  p-4 mt-28 divbord'>
                <h2 className='text-center text-3xl text-white font-bold'>Profil</h2>
            </div>
            <div className='w-[70%] mx-auto  p-4 mt-28 divbord'>
                <h2 className='text-center text-3xl text-white font-bold'>Contact</h2>
            </div>
        </div>
    <nav className='h-12 w-12 flex justify-center items-center bg-white rounded-lg fixed top-0 right-0 m-2' onClick={handleToggleMenu}>
        <ul>
            <li className='bg-white border-2 p-1 rounded-lg border-[#B8FFC7]' >
                {toggleMenu ? <div className='iconmenumob'><RxCross2 size={25} /></div>  : <div className='iconmenumob'><RxHamburgerMenu size={25} /></div>} 
            </li>
        </ul>
    </nav>
    
    </div>
    
  )
}

export default NavbarMobile