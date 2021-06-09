import CrescendoEatsApi from "../../api/api";
import { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';

//Icons
import { FaMoneyBillAlt, FaPlusSquare } from 'react-icons/fa';

import "../../styling/new-form.css";
import SpecialsContext from "../../context/SpecialsContext";

function NewRecipeForm() {
    const history = useHistory();
    const { ingredients } = useContext(SpecialsContext);

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

    async function submit(e) {
        e.preventDefault();
        await CrescendoEatsApi.newSpecial(formData);
        history.push('/')
    }

    return(
        <div className="cotainer">
            <div className="row my-4">
                <h2 id="script">Heard of a Deal? <FaMoneyBillAlt color="green"/> Let your neighbors know by posting it here!</h2>

                <h4 id="script">Columns on the LEFT are <span style={{color: "red"}}>MANDATORY</span>! Columns on the RIGHT are <span style={{color: "green"}}>OPTIONAL!</span></h4>
            </div>

            <form onSubmit={submit}>
                <div className="row">
                    <div className="col mx-2">
                        <select
                            name="type"
                            onChange={handleChange}
                            value={formData.type}
                            className="form-control"
                            required>
                                <option value="" disabled defaultValue>Select Type of Special</option>
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
                    <div className="col mx-2">
                        <select
                            name="ingredientId"
                            onChange={handleChange}
                            value={formData.ingredientId}
                            className="form-control">
                            <option value="" disabled defaultValue>Select Related Ingredient</option>
                            {ingredients ? ingredients.map(i => 
                                <option value={i.uuid}>{i.name}</option>
                            ) : ""
                        }
                        </select>

                        <input
                            type="text"
                            name="code"
                            onChange={handleChange}
                            value={formData.code}
                            placeholder= "Promo Code"
                            className="form-control"/>

                        <input
                            type="text"
                            name="geo"
                            onChange={handleChange}
                            value={formData.geo}
                            placeholder="Location, Use Coordinates"
                            className="form-control"/>
                    </div>
                </div>
            
            <button className="btn btn-success btn-lg my-5">Submit <FaPlusSquare/></button>
                
            </form>
        </div>
    )
};

export default NewRecipeForm;