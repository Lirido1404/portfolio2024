import Mainlayout from "./Components/Mainlayout";
import Navbar from "./Components/Navbar";
import NavbarMobile from "./Components/NavbarMobile";


function App() {
  return (
    <div className="App" id='home'>
     <Mainlayout/> 
     <Navbar/>
     <NavbarMobile/>
     
    </div>
  );
}

export default App;
