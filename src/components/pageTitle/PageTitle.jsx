import './pageTitle.css'

const PageTitle = (props) => (
    <div className="title-container my-5 mx-auto">
        <div className="design border-b-4 px-4">
            <div 
                className="contents text-4xl italic tracking-wider">
                {props.title}
            </div>
        </div>
    </div>
)

export default PageTitle;