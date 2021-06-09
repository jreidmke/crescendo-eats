import { Switch, Route } from "react-router-dom";
import Recipes from "../components/Recipes";
import RecipeDetails from "../components/RecipeDetails";
import NewRecipeForm from "../components/forms/NewRecipeForm";

function Routes() {
    return(
        <Switch>

            <Route exact path="/recipes/new">
                <NewRecipeForm/>
            </Route>

            <Route path="/recipes/:recipeId">
                <RecipeDetails/>
            </Route>

            <Route path="/">
                <Recipes/>
            </Route>           

        </Switch>
    )

}

export default Routes;