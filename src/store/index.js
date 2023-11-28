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
    // Reset likes to zero for all posts.
    resetLikes(state) {
      state.posts.forEach(post => {
        post.likes = 0;
      });
    },
  },
  actions: {
    //Data from json file.
    fetchPosts({ commit }) {
      try {
        commit('setPosts', postsData);
      } catch (error) {
        console.error('Error loading posts:', error);
      }
    },
    // Commit the resetLikes mutation
    resetLikes({ commit }) {
      commit('resetLikes');
    },
  },
  modules: {
  }
})