import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import NewRecipeForm from "../components/forms/NewRecipeForm";

it("renders without crashing", async function() {
    render(<MemoryRouter>
                <NewRecipeForm/>        
            </MemoryRouter>
    );
});

it("matches snapshot", () => {
    const { asFragment } = render(
        <MemoryRouter>
            <NewRecipeForm/>        
        </MemoryRouter>        
    );    
    expect(asFragment()).toMatchSnapshot();
});

it("adds a new recipe", () => {
    const { getByPlaceholderText, getByTestId } = render(
        <MemoryRouter>
            <NewRecipeForm/>        
        </MemoryRouter>         
    );

    const nameInput = getByPlaceholderText("Dish Name");
    const descriptionInput = getByPlaceholderText("Dish Description");
    const servingsInput = getByPlaceholderText("Servings");
    const prepTimeInput = getByPlaceholderText("Prep Time in Minutes");
    const cookTimeInput = getByPlaceholderText("Cook Time in Minutes");
    const ingredientInput = getByPlaceholderText("Ingredient Name")
    const amountInput = getByPlaceholderText("Ingredient Amount");
    const measurementInput = getByPlaceholderText("Ingredient Measurement");
    const instructionInput = getByPlaceholderText("Instruction");
    const optional = getByTestId("optional");
    const btn = getByTestId("submit-new-recipe");

    fireEvent.change(nameInput, { target: { value: "Pizza" }});
    fireEvent.change(descriptionInput, { target: { value: "Hot delicious pizza" }});
    fireEvent.change(servingsInput, { target: { value: 3 }});
    fireEvent.change(prepTimeInput, { target: { value: 30 }});
    fireEvent.change(cookTimeInput, { target: { value: 30 }});
    fireEvent.change(ingredientInput, { target: { value: "Cheese" }});
    fireEvent.change(amountInput, { target: { value: 1 }});
    fireEvent.change(measurementInput, { target: { value: "block" }});
    fireEvent.change(instructionInput, { target: { value: "Put the pizza in the oven" }});
    fireEvent.change(optional, { target: { value: "false" }});
    fireEvent.click(btn);
});