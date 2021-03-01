import { request } from './request'

// 轮播图
export function getBanner() {
    return request({
        url: '/banner'
    })
}
// 获取首页热门推荐分类
export function getPersonalCategory() {
    return request({
        url: '/playlist/hot'
    })
}

// 获取首页热门推荐歌单
export function getPersonalized(id) {
    return request({
        url: '/personalized',
        query: {
            id
        }
    })
}


// 热门推荐歌单详情
export function getPlaylistDetail(id) {
    return request({
        url: '/playlist/detail?id=' + id,
    })
}