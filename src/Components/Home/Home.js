import PVImg from './PV-arrays.jpeg';
import '../../App.css';

export default function Home() {
  return (
      <div className="home slide">
        <h1>Solar Calculator Home Page</h1>
        
        <img id = "home-img" src = {PVImg} alt="an array of photovoltaics"/>
        <div id="credits">
          <p>A clone of NREL's PVWatts Calculator</p>
          <p>by Casey McCullough</p>
        </div>
    </div>
  );
}
