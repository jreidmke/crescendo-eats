import { useContext } from 'react';
import SpecialsInfo from './SpecialsInfo';
import SpecialsContext from '../../context/SpecialsContext';

function IngredientsList({recipe}) {
    const { specials, ingredientIds } = useContext(SpecialsContext);

    return(
        <div className="col-5" id="ingredient-list-box">
            <h3>Ingredients</h3>

            <small><b>A bold ingredient means there is a related special.</b></small>

            <ul id='ingredient-list'>
                {recipe.ingredients.map(i => 
                    <li key={i.uuid} id="ingredient"> 
                        <input type="checkbox" className="mx-2"/> 
                        
                        {ingredientIds && ingredientIds.indexOf(i.uuid) !== -1 ? 
                        
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