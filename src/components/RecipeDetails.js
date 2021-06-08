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

                        <div className="col-4">
                            <img src={`${recipe.images.full}`} className="img-fluid"/>
                        </div>

                        <div className="col-4 text-wrap" id="dish-title-box">
                            <h1 id="dish-title">{recipe.title}</h1>
                        </div>

                    </div>

                    <div className="row">

                        <div className="col-4" id="ingredient-list-box">
                            <h3>Ingredients</h3><br/>
                            <ul id='ingredient-list'>
                                {recipe.ingredients.map(i => 
                                    <li key={i.uuid} id="ingredient"> <input type="checkbox"/> {i.amount} {i.measurement} {i.measurement ? "of" : ""} {i.name}</li>
                                    )}
                            </ul>
                        </div>

                        <div className="col-4" id="directions-box">

                            <h3>Directions</h3>

                            <small><b>Bold directions are mandatory</b>. All others optional.</small>

                            <ul id="directions-list">
                                {recipe.directions.map(d =>
                                    <li key={d.instructions} id="direction">
                                        <input type="checkbox" className="m-1"/>
                                        <small>{!d.optional ? d.instructions : <b>{d.instructions}</b>}</small>
                                    </li>
                                    )}
                            </ul>

                        </div>

                    </div>

                </div>

            : ""}
        </div>
    )
}

export default RecipeDetails;