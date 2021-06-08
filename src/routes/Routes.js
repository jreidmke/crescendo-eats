import { Switch, Route } from "react-router-dom";
import RecipeDetails from "../components/RecipeDetails";

function Routes() {
    <Switch>

        <Route path="/recipes/:recipeId">
            <RecipeDetails/>
        </Route>

    </Switch>
}
