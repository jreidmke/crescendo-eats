import CrescendoEatsApi from "../../api/api";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';

//Components
import NewIngredientDetail from "./NewIngredientDetail";
import NewInstructionDetail from "./NewInstructionDetail";
import Alert from '../common/Alert';

//Icons
import { SiCodechef } from 'react-icons/si';
import { BsCardList, BsPlusSquare } from 'react-icons/bs';
import { FaCartPlus } from 'react-icons/fa';

import "../../styling/new-form.css";

function NewRecipeForm() {
    const history = useHistory();

    const [alert, setAlert] = useState();

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
        instructionData.optional = instructionData.optional === "true";
        setInstructionList([...instructionList, instructionData]);
        setInstructionData(instructionDataDefault);
    }

    async function submit(e) {
        e.preventDefault();
        console.log(ingredientList);
        if(!ingredientList.length) {
            setAlert("Must have at least one ingredient to submit a recipe!");
            return;
        };
        if(!instructionList.length) {
            setAlert("Must have at least one instruction to submit a recipe!");
            return;
        };
        let newRecipe = formData;
        newRecipe.ingredients = ingredientList;
        newRecipe.directions = instructionList;
        await CrescendoEatsApi.newRecipe(newRecipe);
        history.push('/');
    }

    return(
            <div className="container">
                <div className="row">
                    <h1 className="my-5" id="script">Fancy Yourself a Chef? <SiCodechef/> Add a New Recipe!</h1>
                </div>

                <div className="row">
                    {alert ? <Alert message={alert}/> : ""}
                    <div className="col-4">

                        <h5 id="script">1. Start here. Name your dish and add other details.</h5>

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

                            <div className="row">
                                <h3 className="my-3" id="script">4. Make sure all your directions and ingredients are accurate before hitting submit!</h3>
                                <button className="btn btn-success btn-lg btn-block w-100" data-testId="submit-new-recipe">Submit <BsPlusSquare/></button>
                            </div>
                        </form>

                    </div>

                    <div className="col-4">

                        <h5 id="script">2. Add your ingredients. You must have at least one ingredient to submit a recipe.</h5>


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

                            <button className="btn btn-primary btn-block w-100">Add Ingredient <FaCartPlus/></button>
                        </form>

                        {ingredientList.length ? ingredientList.map(i => 
                        <NewIngredientDetail key={i.uuid} ingredient={i}/>) : ""}

                    </div>
                    <div className="col-4">
                        <h5 id="script">3. Finally add directions. You must have at least one instruction to submit a recipe.</h5>

                        <form onSubmit={addToInstructionList}>

                            <input
                                type="text"
                                name="instructions"
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
                                data-testid="optional"
                                required>
                                <option value="" disabled defaultValue>Select your option</option>

                                <option value={true}>Optional</option>
                                <option value={false}>Madatory</option>   
                            </select>

                            <button className="btn btn-info btn-block w-100">Add Instruction <BsCardList/></button>

                            {instructionList.length ? instructionList.map(i => 
                            <NewInstructionDetail key={uuidv4()} instruction={i}/>
                            ) : ""}

                        </form>
                    </div>
                </div>
            </div>
        )
};

export default NewRecipeForm;
