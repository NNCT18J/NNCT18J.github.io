import Nav from "../nav/Nav"
// import "./css/header.css"

const Header = (props) => (
    <header className="h-16 bg-gray-700 text-gray-100 flex items-center">
        <div className="w-24"></div>
        <div className="flex-initial text-xl italic tracking-wider">{props.site.name}</div>
        <div className="flex-1"></div>
        <Nav links={props.links} className="flex-initial" />
    </header>
);

export default Header;