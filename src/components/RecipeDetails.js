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
            <div>
                {recipe ? 
                    <div>
                        <img src={`${recipe.images.full}`} width="100%" height="100%"/>
                         <h1>{recipe.title}, <small>{recipe.description}</small></h1>
                    </div>
            : ""}
            </div>
        </div>
    )
}

export default RecipeDetails;