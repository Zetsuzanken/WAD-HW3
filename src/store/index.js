import { createStore } from 'vuex'
import postsData from '@/data/posts.json'

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
        commit('setPosts', postsData);
      } catch (error) {
        console.error('Error loading posts:', error);
      }
    },
  },
  modules: {
  }
})
