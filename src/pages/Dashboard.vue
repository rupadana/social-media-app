<template>
  <div class="container mt-2">
    <div class="row justify-content-center" v-if="isAuthenticated">
      <div class="col-3 col-md-3 col-lg-1 d-flex justify-content-center">
        <el-avatar>
          {{ image_username }}
        </el-avatar>
      </div>
      <div class="col-6 col-md-6 col-lg-4">
        <el-input
          placeholder="What is in your mind?"
          v-model="status"
          type="textarea"
          size="medium"
        ></el-input>
      </div>
      <div class="col-3 col-md-3 col-lg-1">
        <el-button type="primary" @click="createNewPost"> Post </el-button>
      </div>
    </div>
    <div class="col-12">
      <post v-for="post in posts" :post="post" :key="post.objectId" />
    </div>
  </div>
</template>

<script>
import Post from "../components/Post.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    Post,
  },
  data() {
    return {};
  },
  methods: {
    createNewPost() {
      if (!this.new_post.content)
        return this.$notify({
          title: "Content Required",
          message: "You must write some content",
          type: "info",
        });
      this.createPost()
        .then((_) => {
          _;
          this.$notify({
            title: "Success",
            message: "Post Successfully Created",
            type: "success",
          });

          this.getAllPost();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    ...mapActions(["createPost", "getAllPost"]),
  },
  computed: {
    ...mapGetters(["image_username", "new_post", "isAuthenticated", "posts"]),
    status: {
      get() {
        return this.new_post.content;
      },
      set(value) {
        this.$store.commit("setPostContent", value);
      },
    },
  },
  mounted() {
    this.getAllPost();
  },
};
</script>

<style></style>
