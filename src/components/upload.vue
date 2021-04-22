<template>
  <div class="el-upload el-upload--text">
    <input type="file" id="file" hidden @change="fileChange" :accept="accept" />
    <img @click="btnChange" v-if="iconPath" :src="iconPath" class="avatar" />
    <i @click="btnChange" v-else class="el-icon-plus avatar-uploader-icon"></i>
  </div>
</template>
<script>
// import { upload } from "@/api/common";
export default {
  name: "upload",
  data() {
    return {
      accept: { String, default: "image/*" }, //预选文件类型
    };
  },

  created() {},
  computed: {},
  props: {
    iconPath: {
      type: String,
      default: "",
    },
    // addForm: {
    //   type: Object,
    //   default: () => {
    //     return {
    //       phone: "",
    //     };
    //   },
    // },
  },
  methods: {
    async fileChange(e) {
      // console.log(e);
      if (!this.getFile()) {
        return;
      }
      let info = await upload(e);
      // console.log(info);
      if (info.succeed) {
        let iconPath = info.data.picUrl || "";
        this.iconPath = iconPath;
        this.$emit("onFileChange", iconPath);
      } else {
        this.$message({
          message: info.data.msg,
          type: "error",
        });
      }
    },
    btnChange() {
      var file = document.getElementById("file");
      file.click();
    },
    getFile() {
      var file = document.getElementById("file");
      if (file.files.length == 0) {
        console.log("没有选择文件");
        return null;
      }
      return file.files[0];
    },
  },
};
</script>
<style lang="less">
.el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
</style>
