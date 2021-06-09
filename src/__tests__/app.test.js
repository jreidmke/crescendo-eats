import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import Alert from "../components/common/Alert";
import Footer from "../components/common/Footer";
import NavBar from "../components/common/NavBar";
import Spinner from "../components/common/Spinner";
import Recipe from "../components/recipe-list/Recipes";
import RecipeCard from "../components/recipe-list/RecipeCard";

it("renders without crashing", async function() {
    render(<MemoryRouter>
                <Alert message="Error"/>        
            </MemoryRouter>
    );
});
  
it("matches snapshot", () => {
    const { asFragment } = render(
        <MemoryRouter>
            <Alert message="Error"/>        
        </MemoryRouter>        
    );    
    expect(asFragment()).toMatchSnapshot();
});

it("renders without crashing", async function() {
    render(<MemoryRouter>
                <Footer/>        
            </MemoryRouter>
    );
});
  
it("matches snapshot", () => {
    const { asFragment } = render(
        <MemoryRouter>
            <Footer/>        
        </MemoryRouter>        
    );    
    expect(asFragment()).toMatchSnapshot();
});

it("renders without crashing", async function() {
    render(<MemoryRouter>
                <NavBar/>        
            </MemoryRouter>
    );
});
  
it("matches snapshot", () => {
    const { asFragment } = render(
        <MemoryRouter>
            <NavBar/>        
        </MemoryRouter>        
    );    
    expect(asFragment()).toMatchSnapshot();
});

it("renders without crashing", async function() {
    render(<MemoryRouter>
                <Spinner/>        
            </MemoryRouter>
    );
});
  
it("matches snapshot", () => {
    const { asFragment } = render(
        <MemoryRouter>
            <Spinner/>        
        </MemoryRouter>        
    );    
    expect(asFragment()).toMatchSnapshot();
});