const Footer = (props) => (
    <footer className="h-12 flex items-center bg-gray-100">
        <div className="flex-1"></div>
        <div className="flex-initial text-gray-500 text-md">
            {`© ${props.site.created_by},　${props.site['created_at']['year']}`}
        </div>
        <div className="flex-1"></div>
    </footer>
);

export default Footer;