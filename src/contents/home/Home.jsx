import PageTitle from '../../components/contentsTitle/ContentsTitle';
import './home.css'

const Home = (props) => {
    return (
        <div>
            <PageTitle title={props.title} subtitle={props.subtitle} hero={props.hero} />
            {/* <div className="hero">
                <img src={`${process.env.PUBLIC_URL}/img/page/home/hero.jpg`} alt="Gerd AltmannによるPixabayからの画像">
                </img>
                <div className="subtitle flex-inline p-8 mx-auto text-center text-gray-700 rounded-xl">
                    {props.subtitle.map(strObj => {
                        return (
                            <span className={strObj?.type ?? ''}>{strObj.str}</span>
                        )
                    })}
                </div>
            </div> */}
        </div>
    );
}

export default Home;