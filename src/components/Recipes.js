import CrescendoEatsApi from '../api/api';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';

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
            {recipes ? recipes.map(r => 
            <RecipeCard recipe={r}/>)
            : ""
            }
        </div>
    )
};

export default Recipes;

{/* <li key={r.uuid}><Link to={`/recipes/${r.uuid}`}>{r.title}</Link></li> */}