import './css/pageTitle.css'

const PageTitle = (props) => (
    <div className="title-container">
        <div className="design">
            <div className="contents">{props.title}</div>
        </div>
    </div>
)

export default PageTitle;