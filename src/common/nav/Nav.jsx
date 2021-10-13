// import { Link } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './nav.css'

const Nav = (props) => (
    <nav className="flex justify-center items-center h-6 mr-3">
        {props.links.map(link => 
            <AnchorLink href={`#${link.path}`} 
                className="underline-hover mx-2 md:mx-7 text-center hover">
                {link.title}
            </AnchorLink>
        )}
    </nav>
);

export default Nav;