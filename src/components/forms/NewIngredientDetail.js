import "../../styling/ingredient-detail.css"

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