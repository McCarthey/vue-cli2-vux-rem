<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { calRem } from "./rem";

const fontSize = 32

export default {
  name: "app",
  beforeCreate() {
    calRem(fontSize)
    window.onresize = () => calRem(fontSize)
  }
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";

body {
  background-color: #fbf9fe;
}
</style>
