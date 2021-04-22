<template>
  <div>
    <el-date-picker v-model="date" type="date" :placeholder="placeholderText">
    </el-date-picker>
  </div>
</template>
<script>
export default {
  name: "datePicker",
  data() {
    return {};
  },

  created() {},
  computed: {},
  props: {
    date: {
      type: String,
      default: "",
    },
    placeholderText: {
      type: String,
      default: "请选择",
    },
  },
  methods: {},
};
</script>
<style lang="less">
</style>