import {Link} from "react-router-dom";
import "../styling/navbar.css";

function NavBar() {
    return(
        <nav className="Navigation navbar navbar-expand-md">
            <Link to={'/'} style={{ textDecoration: 'none', color: "black" }}>
                <p id='title'>Crescendo Eats</p>
            </Link>
            <p id='tagline'>A place for techies to get some recipes.</p>

            
        </nav>
    )
};

export default NavBar;