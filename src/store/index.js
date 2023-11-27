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
      state.posts = posts.map(post => ({ ...post, likes: 0 }));
    },
    resetLikes(state) {
      // Reset likes to zero for all posts
      state.posts.forEach(post => {
        post.likes = 0;
      });
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
    resetLikes({ commit }) {
      // Commit the resetLikes mutation
      commit('resetLikes');
    },
  },
  modules: {
  }
})