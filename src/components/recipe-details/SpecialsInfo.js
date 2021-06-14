//Tools
import { Link } from 'react-router-dom';

//Icons
import { FaEdit } from 'react-icons/fa';

//CSS
import "../../styling/specials-box.css";

/**Displays specials information. Links to Edit Specials Form. */

function SpecialsInfo(id, specials) {
    let relaventSpecials = [];
    for(let s of specials) {
        if(id === s.ingredientId) relaventSpecials.push(s);
    };
    return(
        <div>
            {relaventSpecials.length ?
            relaventSpecials.map(s => 
                <div className="specials-box">
                    <h6>Special: {s.title.toUpperCase()} ({s.type}) <Link to={`/specials/${s.uuid}/edit`}><FaEdit/></Link></h6>
                    <small>{s.text}</small><br/>
                    {"geo" in s ? <small><a href={`http://maps.google.com/maps?q=${s.geo}`}>Click here for location!</a></small> : ""}
                </div>                
                )
            : ""}
        </div>
        )
    // for(let s of specials) {
    //     if(id === s.ingredientId) return(
            // <div className="specials-box">
            //     <h6>Special: {s.title.toUpperCase()} ({s.type}) <Link to={`/specials/${s.uuid}/edit`}><FaEdit/></Link></h6>
            //     <small>{s.text}</small><br/>
            //     {"geo" in s ? <small><a href={`http://maps.google.com/maps?q=${s.geo}`}>Click here for location!</a></small> : ""}
            // </div>
    //     );
    // }
}

export default SpecialsInfo;