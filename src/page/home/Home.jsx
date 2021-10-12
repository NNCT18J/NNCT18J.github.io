import './home.css'

const Home = () => {
    return (
        <div>
            <div className="hero">
                <img src={`${process.env.PUBLIC_URL}/img/page/home/hero.jpg`} alt="Gerd AltmannによるPixabayからの画像">
                </img>
                <div className="subtitle flex-inline p-8 mx-auto text-center text-gray-700 rounded-xl">
                    <span className="strong">N</span>agano　
                    <span className="strong">N</span>ational　
                    <span className="strong">C</span>ollege　of　
                    <span className="strong">T</span>echnology　
                    20<span className="strong">18</span>　
                    <span className="strong">J</span>ouhou
                </div>
            </div>
        </div>
    );
}

export default Home;