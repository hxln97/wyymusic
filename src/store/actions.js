export const setUser = ({ commit }, user) => {
    commit("userStatus", user)
}
export const setCollect = ({ commit }, songList) => {
    commit("addCollect", songList)
}