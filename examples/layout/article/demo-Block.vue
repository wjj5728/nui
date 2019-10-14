<template>
  <div class="wrap-demoblock">
    <header class="demoblock-title">{{ title }}</header>
    <div class="demo-block">
      <div class="case">
        <slot name="demo"></slot>
      </div>
      <div class="code" v-if="sourcecode">
        <pre v-highlightjs="sourcecode"><code class="javascript"></code></pre>
      </div>
      <div class="demo-btn" @click="isShow = !isShow"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "demoBlock",
  props: {
    title: {
      required: false,
      type: String
    },
    sourcecode: {
      required: false,
      type: String
    }
  },
  data() {
    return {
      isShow: false
    };
  }
};
</script>

<style lang="scss">
.demoblock-title {
  margin: 55px 0 20px;
  font-weight: 400;
  color: #1f2f3d;
}
.demo-block {
  width: 100%;
  margin-bottom: 24px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  &:hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
      0 2px 4px 0 rgba(232, 237, 250, 0.5);
  }
  .case {
    padding: 24px;
  }
}
</style>
