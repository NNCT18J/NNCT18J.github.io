import './works.css';

const Works = (props) => {
    return (
        <div className="flex">
            <div className="flex-1"></div>
            <div className="flex-initial grid grid-flow-row grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-12 mx-auto">
                {props.data.map(work => 
                    <div className="work-container flex flex-col bg-gray-50 text-gray-500 rounded-3xl shadow-xl"
                        >
                        <img src={`${process.env.PUBLIC_URL}/img/page/works/${work.img.src}`} alt={work.img.alt} 
                            className="flex-inline w-full mx-auto rounded-t-3xl object-cover"
                        />

                        {/* 文章部分 */}
                        <div className="m-5 flex-1 flex flex-col">
                            <div className="h-10 flex">
                                {/* 見出し */}
                                <div className="flex-1 text-lg md:text-xl leading-10">{work.title}</div>
                                {/* 日付 */}
                                <div className="flex-initial text-xs md:text-sm text-gray-500 leading-10">
                                    {`${work.date.year}年${work.date.month}月${work.date.date}日 (${work.date.wDay})`}
                                </div>
                            </div>

                            {/* 簡単な説明 */}
                            <div className="h-28 description overflow-y-hidden text-sm md:text-base">{work.description}</div>

                            {/* リンク */}
                            <div className="ml-auto mr-4">
                                <a href={work.link.uri} target="_blank" rel="noreferrer"
                                    className="px-3 py-2 rounded-lg text-base md:text-lg no-underline bg-gray-200 text-gray-500 hover:bg-gray-300">
                                    {work.link.title}
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="flex-1"></div>
        </div>
    );
}

export default Works;