//Tools
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

//Components
import CrescendoEatsApi from '../../api/api';
import RecipeCard from './RecipeCard';

//Icons
import { FaPlusCircle } from 'react-icons/fa';

/** Lists all Recipes using Child Component, RecipeCard.js */

function Recipes() {
    const [recipes, setRecipes] = useState();
    
    useEffect(() => {
        async function getAllRecipes() {
            const res = await CrescendoEatsApi.getAllRecipes();
            setRecipes(res);
        };
        getAllRecipes();
    }, []);

    return(
        <div>
            {recipes ? 
            <div className="container">
                <div className="row my-3">
                    <h1 id="script">We currently have <span style={{color: "green"}}>{recipes.length}</span> dishes on our menu!</h1>
                    <h4 id="script">Picky eater? None of these look appetizing? Click <Link to={`/recipes/new`}> here to add your own! <FaPlusCircle color="green"/></Link></h4>
                    <h5 id="script">Or hear of a special or local deal? Click <Link to={`/specials/new`}>here to add one <FaPlusCircle color="green"/></Link> and help your neighbors!</h5>
                </div>
                <div className="row">
                    {recipes.map(r =>
                    <div className="col-6" key={r.uuid}> 
                        <RecipeCard recipe={r}/>
                    </div>)}
                </div>
            </div>
            : ""}
        </div>
    )
};

export default Recipes;
