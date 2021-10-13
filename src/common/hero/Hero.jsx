import './hero.css'

const Hero = (props) => (
    <div className="hero bg-white">
        <img src={`${process.env.PUBLIC_URL}/img/components/pageTitle/${props.hero}`} alt="Gerd AltmannによるPixabayからの画像">
        </img>
        <div className="subtitle flex-inline p-8 mx-auto text-center text-gray-700 rounded-xl">
            {props.subtitle.map(strObjs => (
                <div className="str-objs">
                    {strObjs.map(strObj => (
                        <span className={strObj?.type ?? ''}>{strObj.str}</span>
                    ))}
                </div>
            ))}
        </div>
    </div>
)

export default Hero;