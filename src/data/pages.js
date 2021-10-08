import Home from '../page/home/Home';
import Works from '../page/works/Works';
import Links from '../page/links/Links';

const pagesData = [
    {
        title: 'home',
        path: '/',
        Component: Home,
        data: {}
    },
    {
        title: 'works',
        path: '/works',
        Component: Works,
        data: [
            {
                title: '文化祭2021',
                date: '2021/10/17',
                links: []
            }
        ]
    },
    {
        title: 'links',
        path: '/links',
        Component: Links,
        data: [
            {
                title: 'GitHub',
                uri: 'https://github.com/nnct18j'
            }
        ]
    }
]
export default pagesData;