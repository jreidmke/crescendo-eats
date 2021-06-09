import CrescendoEatsApi from '../api/api';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import "../styling/recipe-details.css";

//Components
import DetailsImage from "./recipe-details/DetailsImage";
import DetailsTitle from './recipe-details/DetailsTitle';
import IngredientsList from './recipe-details/IngredientsList';
import InstructionsList from './recipe-details/InstructionsList';

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
                    <div className="row justify-content-center">

                        <DetailsImage recipe={recipe}/>

                        <DetailsTitle recipe={recipe}/>

                    </div>

                    <div className="row justify-content-center">

                        <IngredientsList recipe={recipe}/>

                        <InstructionsList recipe={recipe}/>

                    </div>

                </div>

            : ""}
        </div>
    )
}

export default RecipeDetails;