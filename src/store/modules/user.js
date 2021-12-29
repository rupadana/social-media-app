import Moralis from "moralis";

const state = () => ({
  user: {},
});

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
};

const getters = {
  username: (state) => state.user.attributes.username ?? "",
  isAuthenticated: (state) => {
    return Object.keys(state.user).length > 0;
  },
  image_username: (state) => {
    if (!state.user.attributes) return "";

    return state.user.attributes.username.charAt(0).toUpperCase();
  },
};

const actions = {
  checkAuth() {
    const user = Moralis.User.current();
    if (user) {
      this.commit("setUser", user);
    }
  },
  login_process({ _ }, properties = {}) {
    _;

    return Moralis.Web3.authenticate(properties).then((user) => {
      this.commit("setUser", user);
    });
  },

  async logout() {
    await Moralis.User.logOut();
    this.commit("setUser", {});
  },
  changeUsername({ _ }, username) {
    return new Promise((resolve, reject) => {
      _;
      const current_user = Moralis.User.current();
      const temp_username = current_user.get("username");
      if (!current_user) return reject("user not logged in");

      current_user.set("username", username);
      current_user
        .save()
        .then((response) => {
          this.commit("setUser", current_user);
          resolve(response);
        })
        .catch((err) => {
          current_user.set("username", temp_username);
          reject(err);
        });
    });
  },
};

export default {
  state,
  mutations,
  getters,
  actions,
};
