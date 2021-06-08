import { Link } from 'react-router-dom';
import "../styling/recipe-card.css";
import { GiKnifeFork, GiHotMeal, GiMeal } from 'react-icons/gi';

function RecipeCard({recipe}) {
    return(
        <div className="container" id="recipe-card">
            <div className="row text-center">
                <div className="col-2">
                    <Link to={`/recipes/${recipe.uuid}`}>
                        <img src={recipe.images.small}/>
                        <p>
                            {recipe.title}
                        </p>
                    </Link>
                    <small>{recipe.description}</small>

                    <p>
                        <GiKnifeFork/> {recipe.servings} servings.
                    </p>
                    <p>
                        <GiMeal/> {recipe.prepTime} minutes.
                    </p>
                    <p>
                        <GiHotMeal/> {recipe.cookTime} minutes.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default RecipeCard;