import { request } from "./request"

// 排行榜
export function getRanking(id) {
    return request({
        url: '/toplist',
        query: {
            id
        }
    })
}


// 排行榜详情
export function getRankingDetail(id) {
    return request({
        url: '/playlist/detail?id=' + id,
    })
}