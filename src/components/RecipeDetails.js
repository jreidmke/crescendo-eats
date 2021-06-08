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
    }, []);

    return(
        <div>
            {recipe ? <h1>{recipe.title}, <small>{recipe.description}</small></h1> : ""}
        </div>
    )
}

export default RecipeDetails;
