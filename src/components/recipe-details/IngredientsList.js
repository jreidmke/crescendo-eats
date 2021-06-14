//Tools
import { useState, useContext, useEffect } from 'react';

//Components
import SpecialsInfo from './SpecialsInfo';
import SpecialsContext from '../../context/SpecialsContext';

/**Ingredient list displays a recipe's ingredients along with any related specials. Uses SpecialsInfo as a child component. */

function IngredientsList({recipe}) {
    const { specials } = useContext(SpecialsContext);
    const [ specialIndgredientIds, setspecialIndgredientIds] = useState();

    useEffect(() => {
        function getIndgredientIds() {
            setspecialIndgredientIds(specials.map(s => s.ingredientId));
        };
        getIndgredientIds();
    }, []);

    return(
        <div className="col-5" id="ingredient-list-box">
            <h3 id="script">Ingredients</h3>

            <small><b>A bold ingredient means there is a related special.</b></small>

            <ul id='ingredient-list'>
                {recipe.ingredients.map(i => 
                    <li key={i.uuid} id="ingredient"> 
                        <input type="checkbox" className="mx-2"/> 
                        
                        {specialIndgredientIds && specialIndgredientIds.indexOf(i.uuid) !== -1 ? 
                        
                        <small>
                            <b>
                                {i.amount} {i.measurement} {i.measurement ? "of" : ""} {i.name}
                                {SpecialsInfo(i.uuid, specials)}
                            </b>

                        </small>
                        

                        : 
                        
                        <small>
                            {i.amount} {i.measurement} {i.measurement ? "of" : ""} {i.name}
                        </small>}

                    </li>
                    )}
            </ul>
        </div>        
    )
}

export default IngredientsList;