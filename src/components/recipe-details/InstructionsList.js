function InstructionsList({recipe}) {
    return(
        <div className="col-5" id="directions-box">

            <h3 id="script">Directions</h3>

            <small><b>Bold directions are mandatory</b>. All others optional.</small>

            <ul id="directions-list">
                {recipe.directions.map(d =>
                    <li key={d.instructions} id="direction">
                        <p><input type="checkbox" className="m-1"/>
                        {d.optional ? d.instructions : <b>{d.instructions}</b>}</p>
                    </li>
                    )}
            </ul>

        </div>
    )
}

export default InstructionsList;