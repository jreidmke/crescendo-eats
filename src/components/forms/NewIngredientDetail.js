import "../../styling/ingredient-detail.css"

//Small Div to view Ingredient on New/Edit Recipe form

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