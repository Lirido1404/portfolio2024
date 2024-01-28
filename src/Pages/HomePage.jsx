import React from 'react'
import Mainlayout from '../Components/Mainlayout'
import Navbar from '../Components/Navbar'
import NavbarMobile from '../Components/NavbarMobile'

function HomePage() {
  return (
    <div>
        <Mainlayout/> 
        <Navbar/>
        <NavbarMobile/>
    </div>
  )
}

export default HomePage