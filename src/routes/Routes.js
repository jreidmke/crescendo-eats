import { Switch, Route } from "react-router-dom";
import Recipes from "../components/Recipes";
import RecipeDetails from "../components/RecipeDetails";

function Routes() {
    return(
        <Switch>

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