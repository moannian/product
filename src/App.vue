<template>
  <div id="app">
    <tabbar-item />
    <router-view />
  </div>
</template>
<script>
import TabbarItem from "../src/components/main/TabbarItem";
export default {
  components: {
    TabbarItem,
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>
