import "../../styling/specials-box.css";
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function SpecialsInfo(id, specials) {
    for(let s of specials) {
        if(id === s.ingredientId) return(
            <div className="specials-box">
                <h6>Special: {s.title.toUpperCase()} ({s.type}) <Link to={`/specials/${s.uuid}/edit`}><FaEdit/></Link></h6>
                <small>{s.text}</small><br/>
                {"geo" in s ? <small><a href={`http://maps.google.com/maps?q=${s.geo}`}>Click here for location!</a></small> : ""}
            </div>
        );
    }
}

export default SpecialsInfo;