import { Link } from "react-router-dom";
import './Header2.css'

export default function Header({children}){
    return(
        <nav className="navbar">
            <Link to="/" className="logo" draggable="false">
                <img src="../../public/Images/ICMRlogo-no-bg-white.png" className="logo-image1" alt="JNU-ICMR Logo" />
                <div className="join-logo"></div>
                <img src="../../public/Images/jnu-no-bg-white.png" className="logo-image2" alt="JNU-ICMR Logo" />
            </Link>
            <h1 className="project-title">JNU-ICMR Analytics</h1>
            <Link to="/login">
                <button type="button" className="login-button">Login</button>
            </Link>
            {children}
        </nav>
    )
}