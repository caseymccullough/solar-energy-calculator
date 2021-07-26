
import '../../App.css';
import Table from 'react-bootstrap/Table';
import TableHeader from '../TableHeader/TableHeader';
import TableBody from '../TableBody/TableBody';

export default function Results(props) {

  console.log (props.ac_annualsolarData);

  return (
      <div className="results slide">
        <div id="results-header">
          <h1>Results</h1>
          {/*does object have keys, (larger than 0) */}
          <div id="annual-output">
           {Object.keys(props.solarData).length > 0 ?  
             <span id="annual-output-num">{(props.solarData.outputs.ac_annual).toFixed(0)} &nbsp;</span>
             : <p>unknown</p>} 
            
             <span id="kwh-year">kWh/ Year</span>
          </div> 
        </div>
        
        <Table striped bordered hover>
          <TableHeader></TableHeader>
              {Object.keys(props.solarData).length > 0 ?  
            <TableBody solarData = {props.solarData} elecRate = {props.formData.price}></TableBody>
              : <tbody></tbody>} 
        </Table>

    </div>
  );
}
