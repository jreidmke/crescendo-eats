import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import NewRecipeForm from "../components/forms/NewRecipeForm";

it("renders without crashing", async function() {
    render(<MemoryRouter>
                <NewRecipeForm/>        
            </MemoryRouter>
    );
});