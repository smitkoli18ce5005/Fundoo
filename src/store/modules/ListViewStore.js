const state = {
    switcher: true,
    listView: []
}

const getters = {
    returnListViewForDisplay: (state) => state.listView[0],
    returnListViewForHeader: (state) => state.listView[1]
}

const actions = {
    listViewSwitch({commit}){
        if(state.switcher){
            commit('LIST_VIEW_ON')
        }else{
            commit('LIST_VIEW_OFF')
        }
        commit('SWITCHER')
    }
}

const mutations = {
    SWITCHER: (state) => (state.switcher = !state.switcher),
    LIST_VIEW_ON: (state) => (state.listView = ['notes-list', 'display-note-list']),
    LIST_VIEW_OFF: (state) => (state.listView = [])
}

export default{state, getters, actions, mutations}