import { Link } from "react-router-dom";

const Navbar = (props) => (
    <nav>
        {props.links.map(page => 
            <div><Link to={page.path}>{page.title}</Link></div>
        )}
    </nav>
);

export default Navbar;