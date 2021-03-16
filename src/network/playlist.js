import { request } from './request'

// 歌单分类
export function getPlaylistCategory() {
    return request({
        url: '/playlist/catlist'
    })
}

// 歌单每个分类中显示的歌单
export function getPlaylistCategoryContent(cat, limit, offset) {
    return request({
        url: '/top/playlist',
        params: {
            cat,
            limit,
            offset
        }
    })
}

// 歌单详情
export function getPlaylistDetail(id) {
    return request({
        url: '/playlist/detail?id=' + id
    })
}

// 歌曲详情
export function getSongDetail(ids) {
    return request({
        url: '/song/detail?ids=' + ids
    })
}

// 歌词
export function getLyric(id) {
    return request({
        url: '/lyric?id=' + id
    })
}

// 获取音乐url
export function getSongUrl(id) {
    return request({
        url: '/song/url?id=' + id
    })
}