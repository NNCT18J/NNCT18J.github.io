import PageTitle from '../../components/pageTitle/PageTitle'

const Works = (props) => {
    return (
        <>
            <PageTitle title={props.title} />
            <div className="works-container flex flex-wrap gap-5 mx-16 my-8">
                {props.data.map(work => 
                <div className="flex flex-col bg-gray-50 rounded-3xl shadow-xl border-2 border-gray-600"
                    style={{width: '500px'}}>
                    <img src={`${process.env.PUBLIC_URL}/img/page/works/${work.img.src}`} alt={work.img.alt} 
                        className="flex-inline w-full h-48 mx-auto rounded-t-3xl object-cover"
                    />

                    {/* 文章部分 */}
                    <div className="m-5 flex-1 flex flex-col">
                        <div className="h-10 flex">
                            {/* 見出し */}
                            <div className="flex-1 text-xl leading-10">{work.title}</div>
                            {/* 日付 */}
                            <div className="flex-initial text-sm text-gray-500 leading-10">
                                {`${work.date.year}年${work.date.month}月${work.date.date}日 (${work.date.wDay})`}
                            </div>
                        </div>

                        {/* 簡単な説明 */}
                        <div className="h-28 description overflow-y-hidden text-base">{work.description}</div>

                        {/* リンク */}
                        <div className="ml-auto mr-4">
                            <a href={work.link.uri} target="_blank" rel="noreferrer"
                                className="px-3 py-2 rounded-md text-lg no-underline bg-gray-400 text-gray-100 hover:bg-gray-300">
                                {work.link.title}
                            </a>
                        </div>
                    </div>
                </div>)}
            </div>
        </>
    );
}

export default Works;