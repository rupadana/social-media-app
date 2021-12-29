<template>
  <div id="about" class="mt-5">
    <p>This is demo project</p>
    <p class="mt-2">Project supporter :</p>

    <div class="mt-5">
      <img
        height="50"
        v-for="support in supporter"
        :key="support"
        :src="support"
        class="p-3"
        alt=""
      />
    </div>

    <p class="mt-5">
      Source code -
      <a href="https://github.com/rupadana/social-media-app"
        >Social Media App</a
      >
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      supporter: [
        "https://vuejs.org/images/logo.svg",
        "https://moralis-forum.s3.dualstack.eu-north-1.amazonaws.com/original/1X/cd52036eda033c0e0159daddf654121b9ef8949c.png",
        "https://metamask.io/images/mm-logo.svg",
        "https://api.nuget.org/v3-flatcontainer/walletconnect.desktop/1.6.5/icon",
      ],
    };
  },
};
</script>

<style>
#about {
  text-align: center;
}
</style>
