//Tools
import { Link } from 'react-router-dom';

//Icons
import { FaEdit } from 'react-icons/fa';

//CSS
import "../../styling/specials-box.css";

/**Displays specials information. Links to Edit Specials Form. */

function SpecialsInfo(id, list) {
    let relaventSpecials = [];
    for(let s of list) {
        if(id === s.ingredientId) relaventSpecials.push(s);
    };
    return(
        <div>
            {relaventSpecials.length ?
            relaventSpecials.map(s => 
                <div className="specials-box" key={s.uuid}>
                    <h6>Special: {s.title.toUpperCase()} ({s.type}) <Link to={`/specials/${s.uuid}/edit`}><FaEdit/></Link></h6>
                    <small>{s.text}</small><br/>
                    {"geo" in s ? <small><a href={`http://maps.google.com/maps?q=${s.geo}`}>Click here for location!</a></small> : ""}
                </div>                
                )
            : ""}
        </div>
        )
}

export default SpecialsInfo;