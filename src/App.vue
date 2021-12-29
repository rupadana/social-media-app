<template>
  <div id="app">
    <layout />
  </div>
</template>

<script>
import Layout from "./components/Layout.vue";

export default {
  name: "App",
  components: {
    Layout,
  },
  data() {
    return {
      activeIndex2: "1",
    };
  },
  methods: {
    login() {
      this.$moralis.authenticate().then((user) => {
        console.log(user);
      });
    },
  },
  mounted() {
    this.$moralis.User.logOut();
    console.log(this.$moralis.User.current());
  },
};
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
* {
  padding: 0;
  margin: 0;
}
</style>
