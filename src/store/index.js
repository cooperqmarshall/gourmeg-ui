import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      user: null
    }
  },
  mutations: {
    login (state, user) {
      state.user = user
    }
  }
})

export default store