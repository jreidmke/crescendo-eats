import CrescendoEatsApi from '../api/api';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import "../styling/recipe-details.css";

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

                        <div className="col">
                            <img src={`${recipe.images.medium}`}/>
                        </div>

                        <div className="col text-wrap" id="dish-title-box">
                            <h1 id="dish-title">{recipe.title}</h1>
                        </div>

                    </div>

                    <div className="row">

                        <div className="col">
                            <ul>
                                {recipe.ingredients.map(i => 
                                    <li>{i.amount} {i.measurement} {i.measurement ? "of" : ""} {i.name}</li>
                                    )}
                            </ul>
                        </div>

                        <div className="col"></div>

                    </div>

                </div>

            : ""}
        </div>
    )
}

export default RecipeDetails;