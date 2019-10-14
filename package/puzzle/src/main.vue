<template>
  <div id="puzzle"></div>
</template>
<script>
import Puzzle from "./Puzzle";
export default {
  name: "puzzle",
  props: {
    imgUrl: {
      required: true,
      type: String
    },
    width: {
      required: true,
      type: String
    },
    height: {
      required: true,
      type: String
    },
    limitNum: {
      required: true,
      default: 200
    }
  },
  data() {
    return {
      instance: null
    };
  },
  mounted() {
    this.instance = new Puzzle({
      id: "puzzle",
      width: this.width,
      height: this.height,
      imgUrl: this.imgUrl,
      limitNum: this.limitNum,
      every: step => {
        this.everyHandler(step);
      },
      success: () => {
        this.successHandler();
      },
      fail: () => {
        this.failHandler();
        this.instance.recovery();
      }
    });
  },
  methods: {
    everyHandler(step) {
      this.$emit("every", step);
    },
    successHandler() {
      this.$emit("success");
    },
    failHandler() {
      this.$emit("fail");
    }
  }
};
</script>
