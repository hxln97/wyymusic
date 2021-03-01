import { request } from './request'

// 搜索
export function getSearch(keywords, type, limit, offset) {
    return request({
        url: '/search',
        params: {
            keywords,
            type,
            limit,
            offset,
        }
    })
}