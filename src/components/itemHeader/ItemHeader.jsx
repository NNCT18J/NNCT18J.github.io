import './itemHeader.css'

const itemHeader = (props) => (
    <div className="title-container flex my-5 mx-auto">
        <div className="flex-1"></div>

        <div className="design flex-initial border-b-4 px-4">
            <div 
                className="contents text-4xl italic tracking-wider">
                {props.title}
            </div>
        </div>
        
        <div className="flex-1"></div>
    </div>
)

export default itemHeader;