import './home.css'

const Home = () => {
    return (
        <div className="mx-4 my-4">
            <div className="flex">
                <div className="flex-1"></div>
                <div className="flex-inline p-8 mx-auto text-center text-2xl bg-gray-100 rounded-xl">
                    <span className="strong">N</span>agano　
                    <span className="strong">N</span>ational　
                    <span className="strong">C</span>ollege　of　
                    <span className="strong">T</span>echnology　
                    20<span className="strong">18</span>　
                    <span className="strong">J</span>ouhou
                </div>
                <div className="flex-1"></div>
            </div>
        </div>
    );
}

export default Home;