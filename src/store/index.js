import { createStore } from 'vuex'
import TodooComponentStore from './modules/TodooComponentStore'
import WarningBoxStore from './modules/WarningBoxStore'
import SideNavigationStore from './modules/SideNavigationStore'
import SmallSearchBoxStore from './modules/SmallSearchBoxStore'
import ListViewStore from './modules/ListViewStore'

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
    SideNavigationStore,
    SmallSearchBoxStore,
    ListViewStore
  }
})
