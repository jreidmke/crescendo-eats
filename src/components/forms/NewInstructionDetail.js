import "../../styling/instruction-detail.css"

function NewInstructionsDetail({instruction}) {
    console.log(instruction)
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