// import './css/footer.css'

const Footer = (props) => (
    <footer className="h-10 text-center leading-10 bg-gray-500 text-white">
        {`© ${props.site.created_by},　${props.site['created_at']['year']}`}
    </footer>
);

export default Footer;