const Links = (props) => {
    return (
        <div className="flex flex-col gap-y-3 md:gap-y-4 items-center">
            {props.data.map(link => 
                <a href={link['uri']} target="_blank" rel="noreferrer"
                    className="border-b-2 pt-1 border-gray-300 text-gray-600 text-md md:text-lg no-underline hover:border-gray-600">
                    {link['title']}</a>
            )}
        </div>
    );
}

export default Links;