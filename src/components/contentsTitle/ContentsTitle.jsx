import './contentsTitle.css'

const ContentsTitle = (props) => (
    <div className="hero">
        <img src={`${process.env.PUBLIC_URL}/img/components/pageTitle/${props.hero}`} alt="Gerd AltmannによるPixabayからの画像">
        </img>
        <div className="subtitle flex-inline p-8 mx-auto text-center text-gray-700 rounded-xl">
            {props.subtitle.map(strObj => {
                return (
                    <span className={strObj?.type ?? ''}>{strObj.str}</span>
                )
            })}
        </div>
    </div>
)

export default ContentsTitle;