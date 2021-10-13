import { createStore } from 'vuex'
import TodooComponentStore from './modules/TodooComponentStore'
import WarningBoxStore from './modules/WarningBoxStore'
import SideNavigationStore from './modules/SideNavigationStore'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    TodooComponentStore,
    WarningBoxStore,
    SideNavigationStore
  }
})
