
import '../../App.css';


export default function UserAddress({address}){

   return (
      <div className="location-bar">
            <span className="user-address">{address}</span>
      </div>

  );
}