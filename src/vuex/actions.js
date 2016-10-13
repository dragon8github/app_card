/* action就是负责调用Mutations的。并且可以在这里进行类似$.ajax、$.post等异步操作  */
export const set_back_path = ({ commit }, backpath) => {
	commit('BACK_PATH',backpath)
}