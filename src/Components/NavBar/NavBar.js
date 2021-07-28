
import '../../App.css';
import nrelLogo from './nrel-logo.png';
import LocationFinder from './LocationFinder';
import UserAddress from './UserAddress';

    export default function NavBar({formattedAddress, setFormattedAddress, formData, setFormData}) {
        
        return (
        <nav>
            <div className="nav-container">
                <div  className="nav-item">
                    <a id="pvwatts-header-text" className="font-weight-bold" href="https://pvwatts.nrel.gov/">
                      PVWatts Calculator</a> 
                </div>
                <div className="nav-item">
                    <a href="https://www.nrel.gov/">
                        <img src = {nrelLogo} alt="NREL logo"/></a>
                </div>
            </div>
                <div className="location-bar">
                {formattedAddress === "" ? 
                    <LocationFinder 
                        formData = {formData}
                        setFormData = {setFormData}
                        setFormattedAddress = { setFormattedAddress }
                    /> 
                : <UserAddress id="user-address" address={formattedAddress}/>}
            </div>
        </nav>
        );

    }