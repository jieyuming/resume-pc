<template>
  <div id="app">
    <router-view />
  </div>
</template>

  <script>
    export default {
      name: "App",
  created() {
    if (this.$route.meta.title) {
      document.title = this.$route.meta.title;
    }
  },
};
</script>

  <style>
    @import "/assets/common.css";
    #app {
      font-family: PingFangSC-Semibold, PingFang SC;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #333;
      font-size: 16px;
      background: #f5f5f5;
    }
    html,
body {
      height: 100%;
    margin: 0;
    padding: 0;
  }
  
.none {
      display: none !important;
  }
  
</style>
