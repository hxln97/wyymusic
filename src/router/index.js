import Vue from 'vue'
import VueRouter from 'vue-router'

// 解决点击同一个url控制台报错
import Router from 'vue-router'
import store from '../store'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

// 发现音乐
const Find = () =>
    import ('../views/find/Find')
    // 推荐详情
const RecommendDetail = () =>
    import ('../views/find/childComps/RecommendDetail')
    // 排行榜
const Ranking = () =>
    import ('views/ranking/Ranking')
    // 排行榜详情
const RankingDetail = () =>
    import ('views/ranking/RankingDetail')
    // 歌单
const Playlist = () =>
    import ('../views/playlist/Playlist')
const PlaylistCategory = () =>
    import ('../views/playlist/childComps/PlaylistCategory')
    // 主播电台
const Dj = () =>
    import ('../views/dj/Dj')
const DjDetail = () =>
    import ('../views/dj/djDetail/DjDetail')
    // 歌手
    // const Artist = () =>
    //     import ('../views/artist/Artist')
    //     // 歌手列表
    // const ArtistList = () =>
    //     import ('../views/artist/childComps/ArtistList')
    //     // 歌手详情
    // const ArtistDetail = () =>
    //     import ('../views/artist/childComps/ArtistDetail')

// 歌单详情
const PlaylistDetai = () =>
    import ('../views/playlist/childComps/detail/PlaylistDetai')
    // 歌曲详情
const Song = () =>
    import ('../views/playlist/childComps/detail/Song')
    // 我的音乐
const User = () =>
    import ('../views/user/User')
    // 朋友
const Frinend = () =>
    import ('../views/friend/Friend')

// 下载客户端
const Download = () =>
    import ('../views/download/Download')
    // 搜索
const Search = () =>
    import ('../views/search/Search')
const SearchDetail = () =>
    import ('../views/search/childComps/SearchDetail')
    // 收藏
const Collection = () =>
    import ('../views/collection/Collection')
    // 创作者中心
const Creator = () =>
    import ('../views/creator/Creator')
    // 登录
const Login = () =>
    import ('../views/login/Login')
    // 注册
const Register = () =>
    import ('../views/register/Register')


Vue.use(VueRouter)
    // route 一条路由；  routes 一组路由； router 路由的管理者
    //配置路由
const routes = [{
        path: '',
        redirect: '/find'
    }, {
        path: '/find',
        component: Find,
        children: [{
            path: '/recommend/detail',
            component: RecommendDetail
        }]
    }, {
        path: '/find/ranking',
        component: Ranking,
        children: [{
            path: 'detail',
            component: RankingDetail,
        }, ]
    }, {
        path: '/find/playlist',
        component: Playlist,
        children: [{
            path: 'category',
            component: PlaylistCategory
        }]
    }, {
        path: '/playlist/detail',
        component: PlaylistDetai
    }, {
        path: '/find/dj',
        component: Dj
    }, {
        path: 'dj/detail',
        component: DjDetail,
    },
    // {
    //     path: '/find/artist',
    //     component: Artist,
    //     children: [{
    //         path: 'cat',
    //         component: ArtistList
    //     }]
    // },
    {
        path: '/song',
        component: Song
    },
    // {
    //     path: '/artist',
    //     component: ArtistDetail
    // }, 
    {
        path: '/user',
        component: User
    }, {
        path: '/friend',
        component: Frinend
    }, {
        path: '/download',
        component: Download
    }, {
        path: '/search',
        component: Search,
        children: [{
            path: 'm',
            component: SearchDetail
        }]
    }, {
        path: '/collection',
        component: Collection,
        meta: {
            requireAuth: true //进入这个路由需要登陆
        }
    },
    {
        path: '/creator',
        component: Creator
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    }
]

// 创建router对路由进行管理
const router = new VueRouter({
    routes,
    mode: 'history'
})
export default router

// 鉴权拦截操作
router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
        if (sessionStorage.getItem("userName") != '') { // 判断本地是否存在用户名
            next()
        } else {
            // 未登录,跳转到登陆页面
            next({
                path: '/login'
            })
        }
    }
    // 不需要登陆权限
    else {
        next();
    }
})