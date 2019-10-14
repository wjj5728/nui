<template>
  <div class="content-header">
    <header>{{ ComconentName }}</header>
    <p>{{ ComconentDes }}</p>
  </div>
</template>

<script>
export default {
  props: {
    ComconentName: {
      require: true,
      type: String
    },
    ComconentDes: {
      require: false,
      type: String
    }
  }
};
</script>

<style lang="scss"></style>
