/* action就是负责调用Mutations的。并且可以在这里进行类似$.ajax、$.post等异步操作  */
export const set_back_path = ({ commit }, backpath) => {
	commit('BACK_PATH',backpath)
}

export const set_decline = ({ commit }, b) => {
	console.log("我被调用了：set_decline")
	commit('SET_DECLINE',b)
}