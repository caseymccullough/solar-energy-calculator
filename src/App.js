
import {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import Home from "./Components/Home/Home";
import Resource from "./Components/Resource/Resource";
import System from "./Components/System/System";
import Results from "./Components/Results/Results";
import SubmitData from "./Components/SubmitData/SubmitData";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import './App.css';

export default function App() {

  const [formData, setFormData] = useState({
    latitude: "",
    longitude: "",
    size: "4",
    moduleTypeIndex: "0",
    arrayTypeIndex: "0",
    systemLosses: "14",
    tilt: "20",
    azimuth: "180",
    price: ".12",
});

/*** USE formData AND setFormData  */

const [formattedAddress, setFormattedAddress] = useState("");
const [solarData, setSolarData] = useState({});
const [index, setIndex] = useState(0);
const [isDataValid, setValidData] = useState(0);
  
  const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

  return (
    <div className="App">
      <div id="body">
        <div id = "holding-square">
          <NavBar color="faded" light expand="md" 
            formattedAddress= { formattedAddress } 
            setFormattedAddress = {setFormattedAddress}
            formData = {formData}
            setFormData = {setFormData}>
          </NavBar>
          <main>
              <Carousel activeIndex={index} onSelect={handleSelect} wrap= {false} interval={null} >
                <Carousel.Item>
                  <Home/>
                </Carousel.Item>
                <Carousel.Item >
                  <Resource formData = {formData} setFormData = {setFormData}></Resource>
                </Carousel.Item>
                <Carousel.Item>
                  <System formData = {formData} setFormData = {setFormData}> </System>
                </Carousel.Item>
                <Carousel.Item>  
                  <SubmitData formData = {formData} setValidData = {setValidData} setSolarData={setSolarData}> </SubmitData>   
                </Carousel.Item>
                 <Carousel.Item>  
                   <Results formData={formData} solarData={solarData} ></Results>  
                </Carousel.Item>
              </Carousel>           
          </main>
          <Footer/>  
          </div>
      </div> 
    </div>
  );
}