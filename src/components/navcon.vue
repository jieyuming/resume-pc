<template>
  <div class="fix-header">
    <div class="header-box">
      <img class="company_logo" src="../assets/images/company_logo.png" alt="">
    </div>
  </div>
</template>
<script>
  export default {
    name: "navcon",
    data() {
      return {

      };
    },

    created() { },
    computed: {

    },
    methods: {

    },
  };
</script>
<style lang="less" scoped>
  .fix-header {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 10;
  }
  .header-box {
    /* width: 1440px; */
    width: 100%;
    height: 107px;
    background: linear-gradient(90deg, #C3000B 0%, #E1553E 100%);
    margin: 0 auto;

    .company_logo {
      width: 268px;
      height: 71px;
      margin: 16px 0 0 70px;
    }
  }
</style>