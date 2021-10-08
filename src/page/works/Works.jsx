const Works = (props) => {
    return (
        <div>
            {props.data.map(work => <div>
                <div className="work">{work['title']}</div>
                {work['links'].map(link => 
                    <a href={link['uri']} className="link">{link['title']}</a>
                )}
            </div>)}
        </div>
    );
}

export default Works;