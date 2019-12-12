<template>
  <div>this is a mixin</div>
</template>

<script>
export default {
  name: "Mixin",
  data() {
    return {};
  },
  created() {
    this.customMethods();
  },
  methods: {
    customMethods() {
      console.log("hello this is a mixin");
      this.onShow();
    },
    onShow() {
      console.log("on show event");
    }
  }
};
</script>

