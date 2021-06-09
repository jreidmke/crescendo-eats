import CrescendoEatsApi from "../../api/api";
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';
import { useParams } from "react-router-dom";

//Components
import NewIngredientDetail from "./NewIngredientDetail";
import NewInstructionDetail from "./NewInstructionDetail";
import Alert from '../common/Alert';

//Icons
import { SiCodechef } from 'react-icons/si';
import { BsCardList, BsPlusSquare, BsTrash } from 'react-icons/bs';
import { FaCartPlus } from 'react-icons/fa';

import "../../styling/new-form.css";

function EditRecipeForm() {
    const history = useHistory();
    const { recipeId } = useParams();

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

    const [formData, setFormData] = useState();
    
    const [ingredientData, setIngredientData] = useState(ingredientDataDefault);

    const [ingredientList, setIngredientList] = useState([]);

    const [instructionData, setInstructionData] = useState(instructionDataDefault);

    const [instructionList, setInstructionList] = useState([]);

    useEffect(() => {
        async function getRecipe() {
            let res = await CrescendoEatsApi.getRecipe(recipeId);
            setFormData({
                uuid: res.uuid,
                title: res.title,
                description: res.description,
                servings: res.servings,
                prepTime: res.prepTime,
                cookTime: res.cookTime
            });
            setIngredientList(res.ingredients);
            setInstructionList(res.directions);
        }
        getRecipe();
    }, []);


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

    function removeFromIngredientList(ingredientId) {
        ingredientList.splice(ingredientList.map(i => i.uuid).indexOf(ingredientId), 1);
        setIngredientList([...ingredientList]);
    }

    function addToInstructionList(e) {
        e.preventDefault();
        instructionData.optional = instructionData.optional === "true";
        setInstructionList([...instructionList, instructionData]);
        setInstructionData(instructionDataDefault);
    }

    async function submit(e) {
        e.preventDefault();
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
        <div>
            {formData && ingredientList.length && instructionList.length ? <div className="container">
                <div className="row">
                    <h1 className="my-5" id="script">Out With the Old! In With the New! <SiCodechef/> Edit a Recipe!</h1>
                </div>

                <div className="row">
                    {alert ? <Alert message={alert}/> : ""}
                    <div className="col-3">

                        <h5 id="script">1. Edit the dish name, description and other details.</h5>

                        <form onSubmit={submit}>

                            <label htmlFor="title"><small><i>Dish Title</i></small></label>
                            <input
                                type="text"
                                name="title"
                                onChange={handleChange}
                                value={formData.title}
                                placeholder="Dish Name"
                                className="form-control"
                                required/>

                            <label htmlFor="description"><small><i>Dish Description</i></small></label>
                            <input
                                type="text"
                                name="description"
                                onChange={handleChange}
                                value={formData.description}
                                placeholder="Dish Description"
                                className="form-control"
                                required/>

                            <label htmlFor="servings"><small><i>Number of Servings</i></small></label>
                            <input
                                type="number"
                                name="servings"
                                onChange={handleChange}
                                value={formData.servings}
                                placeholder="Servings"
                                className="form-control"
                                required/>

                            <label htmlFor="prepTime"><small><i>Prep Time in Minutes</i></small></label>
                            <input
                                type="number"
                                name="prepTime"
                                onChange={handleChange}
                                value={formData.prepTime}
                                placeholder="Prep Time in Minutes"
                                className="form-control"
                                required/>   

                            <label htmlFor="cookTime"><small><i>Cook Time in Minutes</i></small></label>
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
                                <button className="btn btn-success btn-lg btn-block w-100">Submit <BsPlusSquare/></button>
                            </div>
                        </form>

                    </div>

                    <div className="col-5">

                        <h5 id="script">2. To remove an ingredient, click on the <BsTrash/> beneath it's box. To add an ingredient, scroll down to form.</h5>

                        {ingredientList.length ? ingredientList.map(i =>

                        <div key={i.uuid}>
                            <NewIngredientDetail ingredient={i} isNew={false} />
                            <BsTrash onClick={()=> removeFromIngredientList(i.uuid)}/>
                        </div>
                        
                        ) : ""}

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



                    </div>
                    <div className="col-3">
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
            </div> : ""}
            </div>
        )
};

export default EditRecipeForm;

{/* <BsTrash onClick={e => {e.preventDefault(); removeFromIngredientList(i.uuid)}}/> */}