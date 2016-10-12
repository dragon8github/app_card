
let state = {
	backPath: ''
}


const mutations = {
	BACK_PATH ( state, backPath ) {
		state.backPath = backPath
	}
}

export default {
	state,
	mutations
}