const Footer = (props) => (
    <footer>{`©${props.site['name']}, ${props.site['created_at']['year']}`}</footer>
);

export default Footer;