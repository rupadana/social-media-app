import Moralis from "moralis";
import Vue from "vue";
Moralis.start({
  serverUrl: process.env.VUE_APP_MORALIS_SERVER_URL,
  appId: process.env.VUE_APP_MORALIS_APP_ID,
});

Vue.prototype.$moralis = Moralis;
