import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [],
  },
  getters: {
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        const response = await fetch('https://api.jsonbin.io/v3/b/65451cf012a5d3765994721c');
        const data = await response.json();
        commit('setPosts', data.record);
      } catch (error) {
        console.error('Error loading posts:', error);
      }
    },
  },
  modules: {
  }
})
