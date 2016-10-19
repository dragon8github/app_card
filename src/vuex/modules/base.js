
let state = {
	backPath: '/',
	decline:false
}


const mutations = {
	BACK_PATH ( state, backPath ) {
		state.backPath = backPath
	},
	SET_DECLINE ( state,b ) {
		state.decline = b
	}
}



export default {
	state,
	mutations
}