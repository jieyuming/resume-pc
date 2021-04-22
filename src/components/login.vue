<template>
  <div class="dialog" v-if="dialogFormVisible">
    <div class="mask" @click="onCancel"></div>
    <div class="dialog-box">
      <div class="title-box">
        <div class="line"></div>
        <div class="title">验证</div>
        <div class="line"></div>
      </div>
      <div class="from-box">
        <div class="item">
          <img class="photo" src="../assets/images/user.png" alt="">
          <el-input class="input" placeholder="姓名" v-model="form.input1">
          </el-input>
        </div>
        <div class="item">
          <img class="photo" src="../assets/images/user.png" alt="">
          <el-input class="input" placeholder="手机号码" v-model="form.input2">
          </el-input>
        </div>
        <div class="item">
          <img class="photo" src="../assets/images/user.png" alt="">
          <el-input class="input" placeholder="识别码" v-model="form.input3">
          </el-input>
        </div>
        <div class="save" @click="save">确定</div>
      </div>
    </div>
    <toast ref="toast"></toast>
  </div>
</template>
<script>
  import toast from "@/components/toast"
  export default {
    name: "upload",
    data() {
      return {
        form: {
          input1: '',
          input2: '',
          input3: '',
        },
        formLabelWidth: '0'
      };
    },

    created() { },
    components: {
      toast
    },
    computed: {},
    props: {
      dialogFormVisible: {
        type: Boolean,
        default: false,
      }
    },
    methods: {
      save() {
        console.log(this.form);
        this.$refs['toast'].showToast('测试');
      },
      onCancel() {
        this.$emit("onCancel")
      },
    },
  };
</script>
<style lang="less">
  .dialog {}

  .mask {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.36);
  }

  .dialog-box {
    position: fixed;
    left: 50%;
    top: 190px;
    transform: translate(-50%, 0);
    z-index: 10000;
    width: 1043px;
    height: 559px;
    background: url("../assets/images/home-bg.png") no-repeat;
    background-size: 100% 100%;

    .title-box {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 92px 0 50px;

      .line {
        width: 212px;
        height: 1px;
        background: #979797;
      }

      .title {
        font-size: 24px;
        padding: 0 27px;
      }
    }

    .from-box {
      display: flex;
      flex-direction: column;
      align-items: center;

      .item {
        display: flex;
        align-items: center;
        width: 357px;
        height: 50px;
        border-radius: 33px;
        border: 1px solid #C0C0C0;
        /* color: #999; */
        font-size: 18px;
        margin: 0 0 24px;

        .photo {
          width: 30px;
          height: 30px;
          margin: 0 0 0 18px;
        }

        .el-input__inner {
          border: none;
          padding: 0 0 0 9px;
          width: 276px;
        }
      }

      .save {
        width: 177px;
        height: 39px;
        line-height: 39px;
        background: #B91A1C;
        font-size: 16px;
        color: #FFFFFF;
        margin: 41px auto 0;
        text-align: center;
        cursor: pointer;
      }
    }
  }

  .el-dialog {}
</style>