import PVImg from './PV-arrays.jpeg';
import '../../App.css';

export default function Home() {
  return (
      <div className="home slide">
        <h1>Solar Calculator Home Page</h1>
        
        <img id = "home-img" src = {PVImg} alt="an array of photovoltaics"/>
        <h4>A clone of NREL's PVWatts Calculator</h4>
        <h4>By Casey McCullough</h4>
    </div>
  );
}
