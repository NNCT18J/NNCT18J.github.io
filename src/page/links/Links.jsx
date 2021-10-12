import PageTitle from '../../components/pageTitle/PageTitle'

const Links = (props) => {
    return (
        <>
            <PageTitle title={props.title} />
            <div className="my-8 flex flex-col gap-y-5 items-center">
                {props.data.map(link => 
                    <a href={link['uri']} target="_blank" rel="noreferrer"
                        className="border-b-2 pt-1 border-gray-300 text-gray-600 text-2xl no-underline hover:border-gray-600">
                        {link['title']}</a>
                )}
            </div>
        </>
    );
}

export default Links;