import "../../styling/instruction-detail.css"

//Small Div to view Instruction on New/Edit Recipe form

function NewInstructionsDetail({instruction}) {
    if(instruction.optional) {
        return(
            <div className="instruction" id="optional">
                <small>{instruction.instructions}</small>
            </div>
        )
    } else {
        return(
            <div className="instruction" id="mandatory">
                <small>{instruction.instructions}</small>
            </div>
        )
    }

} 

export default NewInstructionsDetail;