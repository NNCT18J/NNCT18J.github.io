import PageTitle from '../../components/pageTitle/PageTitle'
import './css/works.css'

const Works = (props) => {
    return (
        <>
            <PageTitle title={props.title} />
            <div className="works-container">
                {props.data.map(work => 
                <div className="item">
                    <img src={`${process.env.PUBLIC_URL}/img/page/works/${work.img.src}`} alt={work.img.alt} />
                    <div className="sentence-container">
                        <div className="title">{work.title}</div>
                        <div className="date">
                            {`${work.date.year}年${work.date.month}月${work.date.date}日 (${work.date.wDay})`}
                        </div>
                        <div className="description">{work.description}</div>
                        <div className="link">
                            <a href={work.link.uri} className="link" target="_blank" rel="noreferrer">
                            {work.link.title}</a>
                        </div>
                    </div>
                </div>)}
            </div>
        </>
    );
}

export default Works;