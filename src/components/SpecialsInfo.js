import "../styling/specials-box.css";

function SpecialsInfo(id, specials) {
    for(let s of specials) {
        if(id === s.ingredientId) return(
            <div className="specials-box">
                <h6>{s.title.toUpperCase()} ({s.type})</h6>
                <small>{s.text}</small>
            </div>
        );
    }
}

export default SpecialsInfo;