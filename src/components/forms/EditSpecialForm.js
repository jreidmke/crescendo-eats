//Tools
import { useState, useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

//Icons
import { FaPlusSquare } from 'react-icons/fa';
import { GiScreaming } from 'react-icons/gi';

//Components
import CrescendoEatsApi from "../../api/api";
import Spinner from "../common/Spinner";
import SpecialsContext from "../../context/SpecialsContext";

//CSS
import "../../styling/new-form.css";

/**Form to Edit Recipes. User can update dish details, add/remove ingredients, add/remove instructions as well as change the order of instructions.*/


function EditSpecialForm() {
    const { specialId } = useParams();
    const history = useHistory();
    const { ingredients } = useContext(SpecialsContext);

    const [formData, setFormData] = useState();

    useEffect(() => {
        async function getSpecial() {
            let res = await CrescendoEatsApi.getSpecial(specialId);
            setFormData({
                uuid: res.uuid,
                type: res.type,
                title: res.title,
                text: res.text,
                ingredientId: res.ingredientId,
                geo: res.geo,
                code: res.code
            });
        };
        getSpecial();
    }, []);

    function handleChange(e) {
        const { name, value }= e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };

    async function submit(e) {
        e.preventDefault();
        await CrescendoEatsApi.editSpecial(specialId, formData);
        history.push('/')
    }

    return(
        <div className="cotainer">
            <div className="row my-4">
                <h2 id="script">Messed up your Deal? <GiScreaming color="red"/> Fix it before your neighbors find out!</h2>

                <h4 id="script">Columns on the LEFT are MANDATORY! Columns on the RIGHT are OPTIONAL!</h4>
            </div>

            {formData ?
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
                            name="promocode"
                            onChange={handleChange}
                            value={formData.promocode}
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
                
            </form> : <Spinner/>}
        </div>
    )
};

export default EditSpecialForm;