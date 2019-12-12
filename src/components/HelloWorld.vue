<template>
  <div>hello</div>
</template>

<script>
import mixin from "./mixin";
export default {
  name: "HelloWorld",
  mixins: [mixin],
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      isEmpty: false,
      fetchData: false
    };
  },
  created() {
    this.sleep(3000).then(() => {
      this.fetchData = true;
    });
  },
  methods: {
    sleep(time) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, time);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.skeleton {
  padding: 10px;
}

.skeleton .skeleton-head,
.skeleton .skeleton-title,
.skeleton .skeleton-content {
  background: rgb(194, 207, 214);
}

.skeleton-head {
  width: 100px;
  height: 100px;
  float: left;
}

.skeleton-body {
  margin-left: 110px;
}

.skeleton-title {
  width: 500px;
  height: 60px;
}

.skeleton-content {
  width: 260px;
  height: 30px;
  margin-top: 10px;
}
.skeleton .skeleton-head,
.skeleton .skeleton-title,
.skeleton .skeleton-content {
  background: rgb(194, 207, 214);
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%
  );
  background-size: 20rem 20rem;
  animation: skeleton-stripes 1s linear infinite;
}

@keyframes skeleton-stripes {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 20rem 0;
  }
}
</style>
