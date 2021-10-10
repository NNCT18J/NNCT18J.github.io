import Nav from "../nav/Nav"
import "./css/header.css"

const Header = (props) => (
    <header>
        <div className="title">{props.site.name}</div>
        <Nav links={props.links}/>
    </header>
);

export default Header;