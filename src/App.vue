<template>
    <div id="app">
        <router-link :to="{ name: 'HelloWorld' }">HelloWorld</router-link>
        <router-link :to="{ name: 'HelloFromVux' }">Vux</router-link>
        <router-link :to="{ name: 'HelloRx' }">Rx</router-link> 
        <router-view></router-view>
    </div>
</template>

<script>
import { calRem } from "./rem";

export default {
    name: "app",
    beforeCreate() {
        calRem();
        window.onresize = () => calRem();
    }
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";

body {
    background-color: #fbf9fe;
}
</style>
