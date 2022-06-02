const HomePage = '@/pages/home/index';
const DocumentPage = '@/pages/Document/index';
const EssayPage = '@/pages/Essay/index';
const EssayDetailPage = '@/pages/Essay/detail';


export default [

    {
        path: '/',
        component: '@/layouts/HomeLayout/index',
        routes: [
            { exact: true, path: '/home', component: HomePage },
            { exact: true, path: '/document', component: DocumentPage },
            { exact: true, path: '/essay', component: EssayPage, },
            { exact: true, path: '/essay/detail', component: EssayDetailPage, },
            { redirect: '/home', component: HomePage },
        ],
    },

];
