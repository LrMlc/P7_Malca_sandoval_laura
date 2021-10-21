import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    
  },
  action: {
    createAccount: ({commit}, userInfos) => {
      commit;
      console.log(userInfos);


    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
export default store;
