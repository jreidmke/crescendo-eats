import {Link} from "react-router-dom";
import "../styling/navbar.css";
import { GrLinkedin, GrGithub } from 'react-icons/gr';

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


{/* <ul className="nav navbar-nav navbar-right">
<h4>
    <a href="https://www.linkedin.com/in/jreidmke/"><GrLinkedin color="blue"/></a>
    <a href="https://github.com/jreidmke"><GrGithub/></a>
</h4>
</ul> */}