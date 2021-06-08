import CrescendoEatsApi from '../api/api';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

function RecipeDetails() {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState();

    useEffect(() => {
        async function getRecipe() {
            const res = await CrescendoEatsApi.getRecipe(recipeId);
            setRecipe(res)
        }
        getRecipe();
    }, [recipeId]);

    return(
        <div>
            {recipe ? 
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <img src={`${recipe.images.medium}`}/>
                            <h1>{recipe.title}</h1>
                        </div>
                        <div className="col-4">
                            <h1>HEY</h1>
                        </div>
                    </div>
                </div>

            : ""}
        </div>
    )
}

export default RecipeDetails;