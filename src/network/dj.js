import { request } from "./request"

// 推荐节目
export function getDjRecommend(id) {
    return request({
        url: "/dj/recommend",
        query: {
            id
        }
    })
}

// 节目排行榜
export function getProgramToplist(id) {
    return request({
        url: "/dj/toplist",
        qyery: {
            id
        }
    })
}


// 对应电台的详情价绍
export function getDjDetail(id) {
    return request({
        url: "/dj/detail?rid=" + id,
    })
}

// 对应电台的电台节目
export function getDjProgram(id) {
    return request({
        url: "/dj/program?rid=" + id,
    })
}