import { FaGithub, FaLinkedin, FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";

function Footer() {
    return(
        <div className="container">
            <div className="row">
                <div className="row justify-content-center">
                    <div className="col-6 my-5">
                        <small>Coded by James Reid</small><br/>
                        <small><FaLocationArrow/> Milwaukee, WI</small><br/>
                        <small><FaPhone/> (630) 338-5693</small><br/>
                        <small><FaEnvelope/><a href="mailto:jreidmke@gmail.com"> jreidmke@gmail.com</a></small><br/>
                        <a href="https://github.com/jreidmke">
                            <FaGithub size="2em"/>
                        </a>
                        <a href="https://www.linkedin.com/in/jreidmke/">
                            <FaLinkedin size="2em"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;