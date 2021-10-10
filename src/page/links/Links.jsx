import PageTitle from '../../components/pageTitle/PageTitle'
import './css/links.css'

const Links = (props) => {
    return (
        <>
            <PageTitle title={props.title} />
            <div className="links">
                {props.data.map(link => 
                    <div className="link">
                        <a href={link['uri']} target="_blank" rel="noreferrer">{link['title']}</a>
                    </div>
                )}
            </div>
        </>
    );
}

export default Links;