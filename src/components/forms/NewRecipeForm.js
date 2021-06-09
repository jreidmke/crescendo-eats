import CrescendoEatsApi from "../../api/api";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';
import NewIngredientDetail from "./NewIngredientDetail";

import "../../styling/new-form.css";

function NewRecipeForm() {
    const history = useHistory();
    const ingredientDataDefault = {
        uuid: uuidv4(),
        name: "",
        amount: "",
        measurement: ""
    };

    const instructionDataDefault = {
        instructions: "",
        optional: ""
    }

    const [formData, setFormData] = useState({
        uuid: uuidv4(),
        title: "",
        description: "",
        servings: "",
        prepTime: "",
        cookTime: ""
    });

    const [ingredientData, setIngredientData] = useState(ingredientDataDefault);

    const [ingredientList, setIngredientList] = useState([]);

    const [instructionData, setInstructionData] = useState(instructionDataDefault);

    const [instructionList, setInstructionList] = useState([]);

    function handleChange(e) {
        const { name, value }= e.target;
        if(name in formData) {
            setFormData(data => ({
                ...data,
                [name]: value
            }));
        } else if(name in ingredientData) {
            setIngredientData(data => ({
                ...data,
                [name]: value
            }))
        } else {
            setInstructionData(data => ({
                ...data,
                [name]: value
            }))
        }
    };

    function addToIngredientList(e) {
        e.preventDefault();
        setIngredientList([...ingredientList, ingredientData]);
        setIngredientData(ingredientDataDefault);
    };

    function addToInstructionList(e) {
        e.preventDefault();
        setInstructionList([...instructionList, instructionData]);
        setInstructionData(instructionDataDefault);
    }

    async function submit(e) {
        e.preventDefault();
        let newRecipe = formData;
        newRecipe.ingredients = ingredientList;
        newRecipe.directions = instructionList;
        await CrescendoEatsApi.newRecipe(newRecipe);
        history.push('/');
    }

    return(
            <div className="container">
                <div className="row">
                    <h1>Add New Recipe</h1>
                    <h1>*a uuid will be generated</h1>
                </div>

                <div className="row">
                    <div className="col-4">
                        <form onSubmit={submit}>

                            <input
                                type="text"
                                name="title"
                                onChange={handleChange}
                                value={formData.title}
                                placeholder="Dish Name"
                                className="form-control"
                                required/>

                            <input
                                type="text"
                                name="description"
                                onChange={handleChange}
                                value={formData.description}
                                placeholder="Dish Description"
                                className="form-control"
                                required/>

                            <input
                                type="number"
                                name="servings"
                                onChange={handleChange}
                                value={formData.servings}
                                placeholder="Servings"
                                className="form-control"
                                required/>

                            <input
                                type="number"
                                name="prepTime"
                                onChange={handleChange}
                                value={formData.prepTime}
                                placeholder="Prep Time in Minutes"
                                className="form-control"
                                required/>   

                            <input
                                type="number"
                                name="cookTime"
                                onChange={handleChange}
                                value={formData.cookTime}
                                placeholder="Cook Time in Minutes"
                                className="form-control"
                                required/> 

                            <button>Sumbit</button>
                        </form>
                    </div>

                    <div className="col-4">
                        <form onSubmit={addToIngredientList}>
                            <input
                                type="text"
                                name="name"
                                onChange={handleChange}
                                value={ingredientData.name}
                                placeholder="Ingredient Name"
                                className="form-control"
                                required/>

                            <input 
                                type="number"
                                name="amount"
                                onChange={handleChange}
                                value={ingredientData.amount}
                                placeholder="Ingredient Amount"
                                className="form-control"
                                required/>

                            <input
                                type="text"
                                name="measurement"
                                onChange={handleChange}
                                value={ingredientData.measurement}
                                placeholder="Ingredient Measurement"
                                className="form-control"
                                required/>

                            <button>Add Ingredient</button>
                        </form>
                        {ingredientList.length ? ingredientList.map(i => 
                        <NewIngredientDetail ingredient={i}/>) : ""}
                    </div>
                    <div className="col-4">
                        <form onSubmit={addToInstructionList}>

                            <input
                                type="text"
                                name="instruction"
                                onChange={handleChange}
                                value={instructionData.instructions}
                                placeholder="Instruction"
                                className="form-control"
                                required/>

                            <select
                                name="optional"
                                onChange={handleChange}
                                value={instructionData.optional}
                                className="form-control"
                                required>
                                <option value="" disabled defaultValue>Select your option</option>

                                <option value={true}>Optional</option>
                                <option value={false}>Madatory</option>   
                            </select>

                            <button>Add Instruction</button>

                        </form>
                    </div>
                </div>
            </div>
        )
};

export default NewRecipeForm;
