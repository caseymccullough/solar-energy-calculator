
import '../../App.css';


export default function UserAddress({address}){

   return (
      <div className="location-info-bar">
         <h2 id="user-address">
            <span>My Location: </span>
            <span>{address}</span>
         </h2>

  

    </div>
  );
}