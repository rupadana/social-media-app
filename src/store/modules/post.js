import Moralis from "moralis";
const state = () => ({
  new_post: {
    content: "",
  },
  posts: [],
});

const mutations = {
  setPostContent: (state, v) => (state.new_post.content = v),
  setPosts: (state, v) => (state.posts = v),
};

const getters = {
  new_post: (state) => state.new_post,
  posts: (state) => state.posts,
};

const actions = {
  createPost({ state, commit }) {
    const User = Moralis.Object.extend("User");
    const user = new User();

    const current_user = Moralis.User.current();
    user.id = current_user.id;
    const Post = Moralis.Object.extend("Post");
    const new_post = new Post();
    new_post.set("content", state.new_post.content);
    new_post.set("writer", current_user);
    commit("setPostContent", "");
    return new_post.save();
  },
  async getAllPost({ commit }) {
    const params = {};
    try {
      const response = await Moralis.Cloud.run("getAllPost", params);
      commit("setPosts", response);
    } catch (error) {
      const code = error.code;
      const message = error.message;
      console.log(code, message);
    }
  },
};

export default {
  state,
  mutations,
  getters,
  actions,
};
