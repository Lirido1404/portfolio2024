import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import "./NavbarMobile.css";


function NavbarMobile() {
    const [toggleMenu,setToggleMenu] = useState(false);

    const handleToggleMenu = ()=>{
        setToggleMenu(!toggleMenu);
    }

    const fermerMenu =()=>{
        setToggleMenu(false);
    }
   
  return (
    <div className='hidden navmob1'>
        <div className={`h-[100vh] bg-[#08262E] fixed top-0 w-[100%] ${toggleMenu ? "" : "atransform"} menunavmob flex flex-col justify-center items-center gap-20`}>
    <div className='w-[50%] mx-auto p-4 divbord flex justify-center'>
        <a href='#home' className='text-center text-3xl text-white font-bold' onClick={fermerMenu}>Accueil</a>
    </div>
    <div className='w-[50%] mx-auto p-4 divbord flex justify-center'>
        <a href='#real' className='text-center text-3xl text-white font-bold' onClick={fermerMenu}>Réalisations</a>
    </div>
    <div className='w-[50%] mx-auto p-4 divbord flex justify-center'>
        <a href='#profil' className='text-center text-3xl text-white font-bold' onClick={fermerMenu}>Profil</a>
    </div>
    <div className='w-[50%] mx-auto p-4 divbord flex justify-center'>
        <a href='#contact' className='text-center text-3xl text-white font-bold' onClick={fermerMenu}>Contact</a>
    </div>
</div>

    <nav className='h-12 w-12 flex justify-center items-center bg-white rounded-lg fixed top-0 right-0 m-5' onClick={handleToggleMenu}>
        <ul>
            <li className='bg-white border-2 p-1 rounded-lg border-[#B8FFC7]' >
                <svg className={`ham hamRotate ham1 ${toggleMenu ? "active" : ""}`} viewBox="0 0 100 100" width="30" >
                    <path
                            className="line top"
                            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                    <path
                            className="line middle"
                            d="m 30,50 h 40" />
                    <path
                            className="line bottom"
                            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
                </svg>
            </li>
        </ul>
    </nav>
    
    </div>
    
  )
}

export default NavbarMobile