import CrescendoEatsApi from '../api/api';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import { BsCardList } from 'react-icons/bs';

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
        <div className="container">
            <h4>Check Out These Recipes...<Link to={`/recipes/new`}>or add your own! <BsCardList/></Link></h4>
            <div className="row">
                {recipes ? recipes.map(r =>
                <div className="col-6"> 
                    <RecipeCard recipe={r}/>
                </div>)
                : ""
                }
            </div>
        </div>

    )
};

export default Recipes;

{/* <li key={r.uuid}><Link to={`/recipes/${r.uuid}`}>{r.title}</Link></li> */}