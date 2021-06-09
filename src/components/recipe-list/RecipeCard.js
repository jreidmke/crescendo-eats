//Tools
import { Link } from 'react-router-dom';

//Icons
import { GiKnifeFork, GiHotMeal, GiMeal } from 'react-icons/gi';

//CSS
import "../../styling/recipe-card.css";

/**Displays Recipe Data on Recipe List page. Links to connected Recipe Details Page */

function RecipeCard({recipe}) {
    return(
        <div className="container" id="recipe-card">
            <div className="row text-center">
                <div className="col">
                    <div className="row">
                        <Link to={`/recipes/${recipe.uuid}`}>
                            {"images" in recipe ? <img src={recipe.images.medium} className="img-fluid" id="recipe-image" alt={recipe.title} data-testid="card-img"/> : <img src={"/img/no_img.jpg"} className="img-fluid"/>}
                            <h3 id="script">
                                {recipe.title}
                            </h3>
                        </Link>
                    </div>
                    <div className="row">
                        <p>{recipe.description}</p>
                        <small><b>
                            <GiKnifeFork/> Makes {recipe.servings} servings.  
                            <GiMeal/> || Prep Time: {recipe.prepTime} minutes.
                            <GiHotMeal/> || Cook Time: {recipe.cookTime} minutes.
                        </b></small>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default RecipeCard;