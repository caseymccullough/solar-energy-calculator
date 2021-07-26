import '../../App.css';
import Table from 'react-bootstrap/Table';

export default function TableBody (props) {

    const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

    const tableRows = months.map((month, i) => {
    return (
    
        <tr key={i}> 
            <td>{ month } </td>
            <td>{props.solarData.outputs.solrad_monthly[i].toFixed(2)}</td>
            <td>{props.solarData.outputs.ac_monthly[i].toFixed(0)}</td>
            <td>${(props.solarData.outputs.ac_monthly[i]
            * props.elecRate).toFixed(2)} </td>
              

        </tr> 
        )
    });

    return (
        <tbody>
            {tableRows}
            {/* last "special" row is below */}
            <tr id = "lastRow"> 
                <td> Annual </td>
                <td>{props.solarData.outputs.solrad_annual.toFixed(2)}</td>
                <td>{props.solarData.outputs.ac_annual.toFixed(0)}</td>
                <td>${(props.solarData.outputs.ac_annual * props.elecRate).toFixed(2)}</td>
            </tr> 
      </tbody>
    );
}