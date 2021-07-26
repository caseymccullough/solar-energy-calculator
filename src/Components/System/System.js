/* from https://ncoughlin.com/posts/react-dropdown/#using-state-to-manage-dropdown-selection
*/

import { Form } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

export default function System({formData, setFormData}) {

  const panelOptions = ["Standard", "Premium", "Thin film"];
  const arrayOptions = ["Fixed - Open Rack", "Fixed - Roof Mounted", "1-Axis", "1-Axis Backtracking", "2-Axis"];
    
    const handleChange = (event)=> {
      setFormData({ ...formData, [event.target.name]: event.target.value});
      console.log(event.target.name + ": " + event.target.value);
    }

    const handleSelectPanel = (eventKey, event) => {
      setFormData({...formData, moduleTypeIndex: eventKey})
    }

    const handleSelectArray = (eventKey, event) => {
      setFormData({...formData, arrayTypeIndex: eventKey})
    }
    
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log (formData);
    }
    
      
    return (
        <div className="system slide">
          <h1>System Information</h1>
        
          <p>Modify the inputs below to run the simulation</p>
  
          <Form onSubmit={handleSubmit} className="system-info-form">
            <label>
              DC System Size
              <input 
                type = "text" 
                name="size" 
                value={formData.size} 
                onChange={handleChange}
                ></input>
            </label>

            <div id= "dropdown-holder">

               <DropdownButton id="dropdown-basic-button" title="Panel type">
 
                    <Dropdown.Item onSelect = {handleSelectPanel} eventKey="0">{panelOptions[0]}</Dropdown.Item>
                    <Dropdown.Item onSelect = {handleSelectPanel} eventKey="1">{panelOptions[1]}</Dropdown.Item>
                    <Dropdown.Item onSelect = {handleSelectPanel} eventKey="2">{panelOptions[2]}</Dropdown.Item>
  
                </DropdownButton>
              
              <DropdownButton
                title="Array type"
                id="dropdown-basic-button"
                className="dropdown"  
                >
                    <Dropdown.Item onSelect = {handleSelectArray} eventKey="0">{arrayOptions[0]}</Dropdown.Item>
                    <Dropdown.Item onSelect = {handleSelectArray} eventKey="1">{arrayOptions[1]}</Dropdown.Item>
                    <Dropdown.Item onSelect = {handleSelectArray} eventKey="2">{arrayOptions[2]}</Dropdown.Item>
                    <Dropdown.Item onSelect = {handleSelectArray} eventKey="3">{arrayOptions[3]}</Dropdown.Item>
                    <Dropdown.Item onSelect = {handleSelectArray} eventKey="4">{arrayOptions[4]}</Dropdown.Item>
              </DropdownButton>
            </div>

            <label>
              System Losses
              <input type="text" 
              name="systemLosses"
              value={formData.systemLosses}
              onChange={handleChange} 
              ></input>
            </label>
            <br></br>

            <label>
              Tilt (degrees)
              <input type="text" 
              name="tilt"
              value={formData.tilt}
              onChange={handleChange}
              ></input>
            </label>
            <br></br>

            <label>
              Azimuth (degrees)
              <input type="text" 
              name="azimuth"
              value={formData.azimuth}
              onChange={handleChange}
              ></input>
            </label>
            
          </Form>
      </div>
    );
  }