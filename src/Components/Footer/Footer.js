import '../../App.css';

export default function Footer() {
  
  const linkNames = ["Need Help?", "Security & Privacy", "Disclaimer", "NREL Home"];
  
  const links = linkNames.map((name, i)=> {
      return (<a href ="https://www.nrel.gov/" key = {i}>{name} {"  |"}</a>);
  });
    
  
  return (
    <div className="footer">
        <div id = "nrel-description">
            <p>NREL is a national laboratory of the U.S. Department of Energy, Office of Energy Efficiency and Renewable Energy, operated by the Alliance for Sustainable Energy, LLC.</p>
        </div>
        <div id="footer-links">
            {links}
        </div>
    </div>
  );
}