
import { Icon} from '@iconify/react';
import locationIcon from '@iconify-icons/oi/map-marker';
import '../../App.css';

export default function LocationPin({ locationName })
{

   return (
      <div className="pin">
         <Icon icon={locationIcon} className="pin-icon" />
         <p className="pin-text">{locationName}</p>
      </div>
    );


}