import React from 'react'


import {Routes,Route,useLocation } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import CovidTracker from "../Pages/CovidTracker";
import WebDocu from "../Pages/WebDocu";
import Digi4All from "../Pages/Digi4All";
import RequeteAjax from "../Pages/RequeteAjax";
import JeuxTypeMario from "../Pages/JeuxTypeMario";

import { AnimatePresence } from 'framer-motion';


function AnimatedRoutes() {

    const location = useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>

          <Route path="/" element={<HomePage/>}/>
          <Route path="/CovidTracker" element={<CovidTracker/>} />
          <Route path="/Webdocumentaire" element={<WebDocu/>} />
          <Route path="/Digi4All" element={<Digi4All/>} />
          <Route path="/RequeteAjax" element={<RequeteAjax/>} />
          <Route path="/JeuxMario" element={<JeuxTypeMario/>} />
          
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes