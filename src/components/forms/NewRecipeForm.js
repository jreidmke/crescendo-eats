import CrescendoEatsApi from "../../api/api";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';

function NewRecipeForm() {
    const history = useHistory();
    const [formData, setFormData] = useState({
        uuid: uuidv4(),
        title: "",
        description: "",
        servings: "",
        prepTime: "",
        cookTime: ""
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
        await CrescendoEatsApi.newRecipe(formData);
        history.push('/');
    }

    return(
            <div className="container">
                <div className="row">
                    <h1>Add New Recipe</h1>
                    <h1>*a uuid will be generated</h1>
                </div>

                <div className="row">
                    <form onSubmit={submit}>
                        <input
                            type="text"
                            name="title"
                            onChange={handleChange}
                            value={formData.title}
                            placeholder="Dish Name"
                            className="form-control"
                            required/>
                        <button>Sumbit</button>
                    </form>
                </div>
            </div>
        )
};

export default NewRecipeForm;

// "uuid": "e80ea521-4d42-48fe-a7a6-ac8952bc0de4",
//     "title": "Queso Big Brat Scramble",
//     "description": "A delicious breakfast, fit for a crowd.",
//     "images": {
//       "full": "/img/queso_brat_scramble.jpg",
//       "medium": "/img/queso_brat_scramble--m.jpg",
//       "small": "/img/queso_brat_scramble--s.jpg"
//     },
//     "servings": 5,
//     "prepTime": 10,
//     "cookTime": 20,