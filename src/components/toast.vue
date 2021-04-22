<template>
  <div class="toast-dialog" v-if="visible">
    {{message}}
  </div>
</template>
<script>
  export default {
    name: "toast",
    data() {
      return {
        visible: false,
        message: "您输入的信息不正确，请联系对应的招聘负责人",
      };
    },

    created() { },
    computed: {},
    props: {
    },
    methods: {
      onCancel() {

      },
      showToast(text) {
        this.message = text;
        this.visible = true;
        let timer = setTimeout(() => {
          this.visible = false;
          clearTimeout(timer);
        }, 2000)
      }
    },
  };
</script>
<style lang="less">
  .toast-dialog {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000001;
    width: 384px;
    padding: 16px 30px;
    line-height: 45px;
    background: #FFFFFF;
    box-shadow: 0px 2px 22px 0px rgba(0, 0, 0, 0.19);
    text-align: center;
    color: #333;
    font-size: 18px;
  }
</style>