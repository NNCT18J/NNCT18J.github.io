const Links = (props) => {
    return (
        <div>
            {props.data.map(link => 
                <a href={link['uri']} className="link">{link['title']}</a>
            )}
        </div>
    );
}

export default Links;