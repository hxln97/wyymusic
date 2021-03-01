import { request } from "./request"

// 热门歌手
export function getHotArtist() {
    return request({
        url: "/top/artists"
    })
}

// 歌手列表
export function getArtistList(type, area, initial) {
    return request({
        url: "/artist/list",
        params: {
            type,
            area,
            initial,
        }
    })
}

// 歌手单曲
export function getArtists(id) {
    return request({
        url: 'artists?id=' + id
    })
}

// 歌手专辑
export function getArtistAlbum(id) {
    return request({
        url: '/artist/album',
        params: {
            id
        }
    })
}

// 歌手MV
export function getArtistMV(id) {
    return request({
        url: '/artist/mv',
        params: {
            id
        }
    })
}

// 歌手描述
export function getArtistDesc(id) {
    return request({
        url: '/artist/desc',
        params: {
            id
        }
    })
}