import { Link } from "react-router-dom";
import './Breadcrumbs.css'

export default function Breadcrumb(props){
    return(
        <li>
            <svg viewBox="0 0 24 44" class="svg-change" preserveAspectRatio="none" fill="black">
                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z"></path>
            </svg>
            <Link to={props.linkto} className="b-link b-text" onClick={() => {window.scroll(0, 0);}}>
                {props.title}
            </Link>
        </li>
    )
}