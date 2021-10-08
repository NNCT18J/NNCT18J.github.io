const Footer = (props) => (
    <footer>{`©${props.site.created_by}, ${props.site['created_at']['year']}`}</footer>
);

export default Footer;