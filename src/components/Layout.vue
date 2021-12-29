<template>
  <div>
    <el-menu
      :default-active="active_index"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item
        v-for="nav in nav_menus"
        :index="nav.path"
        :key="nav.path"
        >{{ nav.name }}</el-menu-item
      >
      <div style="float: right; height: 60px; padding-right: 10px">
        <div style="display: flex; height: 100%; align-items: center">
          <el-button @click="login" v-if="!isAuthenticated" type="warning">
            Sign in using Metamask</el-button
          >
          <el-button
            type="primary"
            @click="loginWalletConnect"
            v-if="!isAuthenticated"
          >
            Sing in using Wallet Connect
          </el-button>

          <el-submenu index="" v-if="isAuthenticated">
            <template slot="title">{{ username }}</template>
            <el-menu-item index="" @click="change_username">
              Change Username
            </el-menu-item>
            <el-menu-item index="" @click="logout">Logout</el-menu-item>
          </el-submenu>
        </div>
      </div>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import { nav_menus } from "../router/routes";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      active_index: "/",
      nav_menus: nav_menus,
    };
  },
  methods: {
    login() {
      this.login_process().catch((err) => {
        console.log(err.message, err.code);
        if (err.code == 4001) {
          this.$notify({
            type: "info",
            title: "Sign canceled",
            message:
              "Sign process canceled because user denied message signature",
          });
        }
      });
    },
    loginWalletConnect() {
      this.login_process({ provider: "walletconnect" }).catch((err) => {
        err;
        this.$notify({
          type: "info",
          title: "Sign canceled",
          message: "Sign process canceled because user close modal",
        });
      });
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    change_username() {
      this.$prompt("Tell me your awesome username", "Change username", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        inputPattern: /[a-z0-9 ]+/,
        inputErrorMessage: "Invalid Username",
      })
        .then(({ value }) => {
          this.changeUsername(value)
            .then((response) => {
              response;
              this.$notify({
                title: "Success",
                message: "Username successfully changed",
                type: "success",
              });
            })
            .catch((error) => {
              this.$notify({
                title: "Error",
                message: error.message,
                type: "error",
              });
            });
        })
        .catch(() => {
          this.$message({ type: "info", message: "Change username canceled" });
        });
    },
    ...mapActions(["login_process", "checkAuth", "logout", "changeUsername"]),
  },
  computed: {
    ...mapGetters(["username", "isAuthenticated"]),
  },
  mounted() {
    this.checkAuth();
  },
};
</script>

<style></style>
