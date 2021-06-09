import "../../styling/ingredient-detail.css"
import { BsTrash } from 'react-icons/bs';

function NewIngredientDetail({ingredient}) {

    return(
        <div id="ingredient-detail">
            <p>
                <b>
                    {ingredient.amount} {ingredient.measurement} {ingredient.measurement ? "of" : ""} {ingredient.name}
                </b>
            </p>
        </div>
    )
}

export default NewIngredientDetail;