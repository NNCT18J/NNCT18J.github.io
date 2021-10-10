import { Link } from "react-router-dom";

import './css/nav.css'

const Nav = (props) => (
    <nav>
        {props.links.map(link => 
            <Link to={link.path} className="item">{link.title}</Link>
        )}
    </nav>
);

export default Nav;