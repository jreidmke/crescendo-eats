import "../styling/specials-box.css";

function SpecialsInfo(id, specials) {
    for(let s of specials) {
        if(id === s.ingredientId) return(
            <div className="specials-box">
                <h6>Special: {s.title.toUpperCase()} ({s.type})</h6>
                <small>{s.text}</small><br/>
                {"geo" in s ? <small><a href={`http://maps.google.com/maps?q=${s.geo}`}>Click here for location!</a></small> : ""}
            </div>
        );
    }
}

export default SpecialsInfo;