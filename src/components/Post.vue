<template>
  <div class="row justify-content-center mt-3" v-if="post">
    <div class="col-12 col-md-12 col-lg-6">
      <div class="col-12">
        <el-card class="box-card">
          <div class="row">
            <div class="col-1">
              <el-avatar>
                {{ post.get("writer").get("username") | img_username }}
              </el-avatar>
            </div>
            <div class="col d-flex justify-content-center flex-column">
              <p style="font-weight: bold">
                {{ post.get("writer").get("username") }}
              </p>
              <p style="color: #00000061; font-size: 10pt">
                {{ post.createdAt }}
              </p>
            </div>
            <el-divider class="mt-2"></el-divider>
            <p>
              {{ post.attributes.content }}
            </p>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style></style>
