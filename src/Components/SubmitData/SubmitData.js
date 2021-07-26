import '../../App.css';
import Button from 'react-bootstrap/Button';

export default function SubmitData ({formData, setSolarData}) {

  const panelOptions = ["Standard", "Premium", "Thin film"];
  const arrayOptions = ["Fixed - Open Rack", "Fixed - Roof Mounted", "1-Axis", "1-Axis Backtracking", "2-Axis"];
    
  const testUrl =`https://developer.nrel.gov/api/pvwatts/v6.json?api_key=DEMO_KEY&lat=40&lon=-115&system_capacity=4&azimuth=180&tilt=40&array_type=1&module_type=1&losses=10`;
    
  let keyValArray = [];
    const keyValue = (input) => Object.entries(input).forEach(([key,value]) => {
        keyValArray.push(key + ": " + value);
      })
      
      keyValue(formData);
      const dataElements = keyValArray.map((str, i) => {
          return (
             (str !== undefined) ? <p key= {i}>{str}</p>: <p></p>
          )
      });


    const getSolarData = async () => {
      try {
        let updatedUrl = `https://developer.nrel.gov/api/pvwatts/v6.json?api_key=DEMO_KEY&lat=`
        + formData.latitude + `&lon=` + formData.longitude 
        + `&system_capacity=`+ formData.size 
        + `&azimuth=` + formData.azimuth 
        + `&tilt=` + formData.tilt 
        + `&array_type=` + formData.arrayTypeIndex 
        + `&module_type=` + formData.moduleTypeIndex 
        + `&losses=` + formData.systemLosses;

        const res = await fetch(updatedUrl);
        const data = await res.json();
        setSolarData(data);
      
      } catch (err) {
        console.log(err);
      }
    };

  




    return (
    <div id="submit-data" className="slide">
      <h1> Data Summary</h1>
              <div id = "data-values">{dataElements}</div>
      <Button onClick={getSolarData}>Submit Data</Button>
    </div>
    );

    
}