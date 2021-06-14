import {Link} from "react-router-dom";
import "../../styling/navbar.css";

/**Simple Navagation Bar */

function NavBar() {
    return(
        <div>
            <nav className="Navigation navbar navbar-expand-md">
                <Link to={'/'} style={{ textDecoration: 'none', color: "black" }}>
                    <p id='title'>Crescendo Eats</p>
                </Link>
                <small id='tagline'>A place for techies to get some recipes.</small>
            </nav>
        </div>
    )
};

export default NavBar;