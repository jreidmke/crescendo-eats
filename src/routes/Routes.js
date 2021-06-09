//Tools
import { Switch, Route } from "react-router-dom";

//Components
import Recipes from "../components/recipe-list/Recipes";
import RecipeDetails from "../components/recipe-details/RecipeDetails";
import NewRecipeForm from "../components/forms/NewRecipeForm";
import EditRecipeForm from "../components/forms/EditRecipeForm";
import NewSpecialForm from "../components/forms/NewSpecialForm";
import EditSpecialForm from "../components/forms/EditSpecialForm";

/**Application Routes */

function Routes() {
    return(
        <Switch>

            <Route exact path="/recipes/new">
                <NewRecipeForm/>
            </Route>

            <Route path="/recipes/:recipeId/edit">
                <EditRecipeForm/>
            </Route>

            <Route path="/recipes/:recipeId">
                <RecipeDetails/>
            </Route>

            <Route exact path="/specials/new">
                <NewSpecialForm/>
            </Route>

            <Route path="/specials/:specialId/edit">
                <EditSpecialForm/>    
            </Route>           

            <Route path="/">
                <Recipes/>
            </Route>           

        </Switch>
    )

}

export default Routes;