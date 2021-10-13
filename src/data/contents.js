import Works from '../contents/works/Works';
import Links from '../contents/links/Links';

const contentsData = [
    {
        title: 'Works',
        path: 'works',
        Component: Works,
        data: [
            {
                title: 'Over4sj',
                date: {
                    year: 2021,
                    month: 10,
                    date: 17,
                    wDay: '日'
                },
                img: {
                    src: 'over4sj.png',
                    alt: 'over4sj image',
                },
                description: '長野高専第56回工嶺祭の4SJ合同クラス企画: OVER 〜そして物語は加速する〜(OVERゲームセンター)',
                link: {
                        title: 'over.nnct18j.com',
                        uri: 'https://over.nnct18j.com'
                },
            }
        ]
    },
    {
        title: 'Links',
        path: 'links',
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
export default contentsData;