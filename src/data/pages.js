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
        data: [
            // 書き方
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
             // descriptionは表示したときに3行まで
                description: 'テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト',
                link: {
                        title: 'GitHub',
                        uri: 'https://github.com/nnct18j'
                },
            },
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
             // descriptionは表示したときに3行まで
                description: '',
                link: {
                        title: 'GitHub',
                        uri: 'https://github.com/nnct18j'
                },
            },
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
             // descriptionは表示したときに3行まで
                description: '',
                link: {
                        title: 'GitHub',
                        uri: 'https://github.com/nnct18j'
                },
            },
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
             // descriptionは表示したときに3行まで
                description: '',
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
                uri: 'https://twitter.com/NNCT18J'
            },
            {
                title: '長野高専',
                uri: 'https://www.nagano-nct.ac.jp/'
            }
        ]
    }
]
export default pagesData;