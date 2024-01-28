import Mainlayout from "./Components/Mainlayout";
import Navbar from "./Components/Navbar";
import NavbarMobile from "./Components/NavbarMobile";

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CovidTracker from "./Pages/CovidTracker";
import WebDocu from "./Pages/WebDocu";
import Digi4All from "./Pages/Digi4All";
import RequeteAjax from "./Pages/RequeteAjax";
import JeuxTypeMario from "./Pages/JeuxTypeMario";

function App() {
  return (
    <div className="App" id='home'>
     
     <Router>
        <Routes>

          <Route path="/" element={<HomePage/>}/>
          <Route path="/CovidTracker" element={<CovidTracker/>} />
          <Route path="/Webdocumentaire" element={<WebDocu/>} />
          <Route path="/Digi4All" element={<Digi4All/>} />
          <Route path="/RequeteAjax" element={<RequeteAjax/>} />
          <Route path="/JeuxMario" element={<JeuxTypeMario/>} />
          
        </Routes>

     </Router>
     
    </div>
  );
}

export default App;
