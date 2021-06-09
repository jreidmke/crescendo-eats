//Tools
import { Link } from 'react-router-dom';

//Icons
import { TiEdit } from "react-icons/ti";

/**Big image for Recipe Details Page. Links to Edit Recipe Form */

function DetailsTitle({recipe}) {
    return(
        <div className="col-5 text-wrap" id="dish-title-box">
            <h1 id="dish-title">{recipe.title} <Link to={`${recipe.uuid}/edit`}><TiEdit/></Link></h1>
            <h3>{recipe.description}</h3>
        </div>
    )
};

export default DetailsTitle;