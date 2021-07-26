
import { Form } from 'react-bootstrap';
import '../../App.css';

export default function Resource({formData, setFormData}) {


  console.log ('form data in resources: ');
  console.log (formData);
  
      /* name is name of thing to which it's bound  
        set formData to the spread of formData, find by name, assign value
         ...formData returns series of comma-separated values
         we add to that the name of one data item : the new value for that item
          this will overwrite the last one (!).  See #1 above. 
      */
      const handleChange = (event)=> {
        setFormData({ ...formData, [event.target.name]: event.target.value});
        console.log(event.target.name + ": " + event.target.value);
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log (formData);
      }
  
    return (
      <div className="resource slide">
        <h1>Solar Resource Data</h1>

    
      <script type="text/javascript"></script>
      <p>Please enter your latitude, longitude, and electricity price below</p>

      <Form onSubmit={handleSubmit} className="lat-and-long-form form slide">
          <label>
            Latitude
            <input 
              type = "text" 
              name="latitude" 
              value={formData.latitude} 
              onChange={handleChange}
              ></input>
          </label>
          <br></br>
          <label>
            Longitude
            <input type="text" 
            name="longitude"
            value={formData.longitude}
            onChange={handleChange}
            ></input>
          </label>
          <br></br>
          <label>
            Electricity Price
            <input type="text" 
            name="price"
            value={formData.price}
            onChange={handleChange}
            ></input>
          </label>
        </Form>

    </div>
  );
}
