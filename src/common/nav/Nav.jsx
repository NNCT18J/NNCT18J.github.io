import { Link } from "react-router-dom";

import './nav.css'

const Nav = (props) => (
    <nav className="flex justify-center items-center h-6 mr-3">
        {props.links.map(link => 
            <Link to={link.path} className="mx-7 text-center underline-move-anime">
                {link.title}
            </Link>
        )}
    </nav>
);

export default Nav;