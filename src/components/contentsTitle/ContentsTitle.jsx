import './contentsTitle.css'

const ContentsTiTle = (props) => (
    <div className="title-container flex mb-10 py-5 mx-auto">
        <div className="flex-1"></div>

        <div 
            className="contents text-6xl italic tracking-widest">
            {props.title}
        </div>
        
        <div className="flex-1"></div>
    </div>
)

export default ContentsTiTle;