<template>
  <div class="slider-box">
    <div class="list">
      <div
        class="item"
        @click="choose(index)"
        :class="selectedIndex == index ? 'selected' : ''"
        v-for="(item, index) in navigationList"
        :key="index"
      >
        <div>{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { navigation } from "@/mixins/navigation";
export default {
  mixins: [navigation],
  name: "leftnav",
  data() {
    return {
      selectedIndex: 0,
    };
  },

  created() {},
  mounted() {},
  beforeDestroy: function () {},
  computed: {},
  methods: {
    choose(index) {
      this.selectedIndex = index;
      this.$emit("onTabChange", index);
    },
    setIndex(index) {
      if(index !== this.selectedIndex){
        this.selectedIndex = index;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.slider-box {
  position: fixed;
  top: 131px;
}
.list {
  background: #fff;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.08);
  margin: 0 28px 0 0;
  .item {
    width: 124px;
    height: 50px;
    line-height: 50px;
    padding: 0 0 0 30px;
    border-left: 4px solid #fff;
    cursor: pointer;
  }
  .selected {
    border-left: 4px solid #b91a1c;
    background: #fceeee;
    color: #b91a1c;
  }
}
</style>