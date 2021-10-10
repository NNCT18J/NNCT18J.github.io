import Home from '../page/home/Home';
import Works from '../page/works/Works';
import Links from '../page/links/Links';

const pagesData = [
    {
        title: 'Home',
        path: '/',
        Component: Home,
        data: {}
    },
    {
        title: 'Works',
        path: '/works',
        Component: Works,
        // descriptionは表示したときに3行まで
        data: [
            {
                title: '文化祭2021',
                date: {
                    year: 2021,
                    month: 10,
                    date: 17,
                    wDay: '日'
                },
                img: {
                    src: 'test.jpg',
                    alt: 'test',
                },
                description: '無事成功無事成功無事成功無事成功無事成功無事成功無事成功無事成功無事成功無事成功無事成功無事成功無事成功無事成功無事成功無事成功無事成功無事成功無事成功無事成功無事成功無事成功無事成功無事成功',
                link: {
                        title: 'GitHub',
                        uri: 'https://github.com/nnct18j'
                },
            },
        ]
    },
    {
        title: 'Links',
        path: '/links',
        Component: Links,
        data: [
            {
                title: 'GitHub',
                uri: 'https://github.com/nnct18j'
            },
            {
                title: 'Twitter',
                uri: 'https://github.com/nnct18j'
            }
        ]
    }
]
export default pagesData;