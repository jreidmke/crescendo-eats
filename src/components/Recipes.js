import CrescendoEatsApi from '../api/api';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
            <ul>
              {recipes ? recipes.map(r => 
                <li key={r.uuid}><Link to={`/recipes/${r.uuid}`}>{r.title}</Link></li>
              ) : ""}
            </ul>
        </div>
    )
};

export default Recipes;