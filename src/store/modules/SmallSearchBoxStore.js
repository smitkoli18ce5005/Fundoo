const state = {
    smallSearchBox: false
}

const getters = {
    returnSmallSearchBox: (state) => state.smallSearchBox
}

const actions = {
    smallSearchBoxSwitch({commit}){
        commit('SMALL_SEARCH_BOX_SWITCH')
    }
}

const mutations = {
    SMALL_SEARCH_BOX_SWITCH: (state) => (state.smallSearchBox = !state.smallSearchBox)
}

export default{state, getters, actions, mutations}