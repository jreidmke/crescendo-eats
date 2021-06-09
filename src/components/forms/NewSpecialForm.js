import CrescendoEatsApi from "../../api/api";
import { useState, useEffect, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';

//Components
import NewIngredientDetail from "./NewIngredientDetail";
import NewInstructionDetail from "./NewInstructionDetail";
import Alert from '../common/Alert';

//Icons
import { SiCodechef } from 'react-icons/si';
import { BsCardList, BsPlusSquare } from 'react-icons/bs';
import { FaMoneyBillAlt } from 'react-icons/fa';

import "../../styling/new-form.css";
import SpecialsContext from "../../context/SpecialsContext";

function NewRecipeForm() {
    const history = useHistory();
    const { ingredients, setIngredients } = useContext(SpecialsContext);
    const [alert, setAlert] = useState();

    const [formData, setFormData] = useState({
        uuid: uuidv4(),
        type: "",
        title: "",
        text: "",
        ingredientId: "",
        geo: "",
        code: ""
    });

    function handleChange(e) {
        const { name, value }= e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };

    async function submit() {

    }

    return(
        <div className="cotainer">
            <div className="row my-4">
                <h2 id="script">Heard of a Deal? <FaMoneyBillAlt color="green"/> Let your neighbors know by posting it here!</h2>

                <h4 id="script">Columns on the LEFT are MANDATORY! Columns on the RIGHT are OPTIONAL!</h4>
            </div>

            <form onSubmit={submit}>
                <div className="row">
                    <div className="col-4">
                        <select
                            name="type"
                            onChange={handleChange}
                            value={formData.type}
                            className="form-control"
                            required>
                                <option value="" disabled defaultValue>Select your option</option>
                                <option value="event">Event</option>
                                <option value="local">Local</option>
                                <option value="promocode">PromoCode</option>
                                <option value="sale">Sale</option>
                        </select>

                        <input
                            type="text"
                            name="title"
                            onChange={handleChange}
                            value={formData.title}
                            placeholder="Special Title"
                            className="form-control"
                            required/>

                        <input 
                            type="text"
                            name="text"
                            onChange={handleChange}
                            value={formData.text}
                            placeholder="Special Text"
                            className="form-control"
                            required/>
                    </div>
                    <div className="col-4">
                        <select
                            name="ingredientId"
                            onChange={handleChange}
                            value={formData.ingredientId}
                            className="form-control">
                            
                            {/* {ingredients.map(i => 
                                <option value={i.uuid}>{i.name}</option>
                                )} */}

                                {console.log(ingredients)}

                        </select>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default NewRecipeForm;


// {
//     "uuid": "3c1aa6a4-802f-4f34-a232-bfd4d975f7b1",
//     "ingredientId": "3d810ba9-7e4e-48aa-b2e9-7918e38b358d",
//     "type": "local",
//     "title": "1 Dozen, 1 Dollar",
//     "geo": "43.044842,-87.904140",
//     "text": "Eggs are on sale at a grocery store near you!"
//   },
//   {
//     "uuid": "8f730f08-5ea5-48fb-bfd7-6a28337efc28",
//     "ingredientId": "aa1ff525-4190-4a66-8d12-3f383a752b55",
//     "type": "promocode",
//     "code": "GETMILK",
//     "title": "$1 off Milk",
//     "text": "Use the promocode GETMILK on Peapod and receive $1 off your next gallon!"
//   },
//   {
//     "uuid": "c6912eeb-f686-482d-8bf4-c118510a4069",
//     "ingredientId": "77ae45d7-659b-4cb5-a4ea-07f00e442974",
//     "type": "sale",
//     "title": "Eriksens Hand Rolled Butter",
//     "text": "Flash this recipe at a Roundy's near you and get 10% off Eriksens Hand Rolled Butter, salted or unsalted."
//   }