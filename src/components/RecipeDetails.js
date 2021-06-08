import CrescendoEatsApi from '../api/api';
import { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import "../styling/recipe-details.css";
import SpecialsContext from '../context/SpecialsContext';
import DropDown from "./DropDown";

const optionsArr = [
    {
      name: "opt1",
      label: "Option 1",
      onClick: () => {}
    },
    {
      name: "opt2",
      label: "Option 2",
      onClick: () => {}
    },
    {
      name: "opt3",
      label: "Option 3",
      onClick: () => {}
    },
    {
      name: "opt4",
      label: "Sub Option 4",
      onClick: () => {},
      subMenu: [
        {
          name: "subOpt4",
          label: "Sub Option 1",
          onClick: () => {}
        }
      ]
    },
    {
      name: "opt5",
      label: "Sub Option 5",
      onClick: () => {},
      subMenu: [
        {
          name: "subOpt5",
          label: "Sub Option 2",
          onClick: () => {}
        }
      ]
    }
  ];
  

function RecipeDetails() {
    const { specials, ingredientIds } = useContext(SpecialsContext);
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

                        <div className="col-5" id="dish-image-box">
                            <img src={`${recipe.images.full}`} className="img-fluid" id="dish-image"/>
                        </div>

                        <div className="col-5 text-wrap" id="dish-title-box">
                            <h1 id="dish-title">{recipe.title}</h1>
                            <h3>{recipe.description}</h3>
                        </div>

                    </div>

                    <div className="row justify-content-center">

                        <div className="col-5" id="ingredient-list-box">
                            <h3>Ingredients</h3>

                            <small><b>A bold ingredient means there is a related special. Click on it to see more!</b></small>

                            <ul id='ingredient-list'>
                                {recipe.ingredients.map(i => 
                                    <li key={i.uuid} id="ingredient"> 
                                        <input type="checkbox" className="mx-2"/> 
                                        
                                        {ingredientIds && ingredientIds.indexOf(i.uuid) !== -1 ? 
                                        
                                        <small>
                                            <b>
                                                <a className="dropdown-toggle" href="#" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    {i.amount} {i.measurement} {i.measurement ? "of" : ""} {i.name}
                                                </a>
                                            </b>

                                        </small>
                                        

                                        : 
                                        
                                        <small>
                                            {i.amount} {i.measurement} {i.measurement ? "of" : ""} {i.name}
                                        </small>}

                                    </li>
                                    )}
                            </ul>
                        </div>

                        <div className="col-5" id="directions-box">

                            <h3>Directions</h3>

                            <small><b>Bold directions are mandatory</b>. All others optional.</small>

                            <ul id="directions-list">
                                {recipe.directions.map(d =>
                                    <li key={d.instructions} id="direction">
                                        <input type="checkbox" className="m-1"/>
                                        <small>{d.optional ? d.instructions : <b>{d.instructions}</b>}</small>
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