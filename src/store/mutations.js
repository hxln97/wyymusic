// 修改state中的数据
// 更改用户状态信息
export const userStatus = (state, user) => {
    if (user) {
        state.currentUser = user
        state.isLogin = true
    } else if (user === '') {
        // 退出清空sessionStorage中的东西
        sessionStorage.setItem("userName", '');
        state.currentUser = '';
        state.isLogin = false;
    }
}

export const addCollect = (state, songList) => {
    state.collectList.push(songList);
}