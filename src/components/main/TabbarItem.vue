<template>
  <div class="box">
    <div
      v-for="(item, index) in option"
      :key="index"
      @click="btn(item.path, index)"
      :class="{ Active: index == current }"
    >
      <tabbar>{{ item.name }}</tabbar>
    </div>
  </div>
</template>

<script>
import Tabbar from "../comment/Tabbar.vue";
export default {
  data() {
    return {
      option: [
        {
          name: "首页",
          path: "/home",
        },
        { name: "关于", path: "/about" },
        { name: "分类", path: "/calssfy" },
        { name: "我的", path: "/profile" },
      ],
      current: 0,
    };
  },
  components: {
    Tabbar,
  },
  methods: {
    btn(path, index) {
      this.$router.push(path);
      this.current = index;
    },
  },
};
</script>

<style scoped>
.box {
  position: absolute;
  display: flex;
  left: 0;
  bottom: 0;
  right: 0;
  background: gray;
}
.box > div {
  flex: 1;
  text-align: center;
  line-height: 45px;
}
.Active {
  color: red;
}
</style>
