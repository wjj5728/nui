<template>
  <div class="wrap-demoblock">
    <header class="demoblock-title">{{ title }}</header>
    <p class="demoblock-des" v-if="des">{{ des }}</p>
    <div class="demo-block">
      <div class="case">
        <slot name="demo"></slot>
      </div>
      <div
        class="code"
        v-if="sourcecode"
        :style="{ maxHeight: isShow ? '2000px' : '0' }"
      >
        <!-- <pre v-highlightjs="sourcecode"><code class="javascript"></code></pre> -->
        <pre
          v-highlightjs
        ><code class="javascript">{{Trim(sourcecode)}}</code></pre>
      </div>
      <div class="demo-btn" @click="isShow = !isShow">
        <i class="nuii" :class="isShow ? 'nui-caret-up' : 'nui-caret-down'"></i>
        <span>{{ isShow ? "展示代码" : "收起代码" }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "demoBlock",
  props: {
    title: {
      required: true,
      type: String
    },
    des: {
      required: true,
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
  },
  methods: {
    Trim(code) {
      let code_list = [];
      code
        .trim()
        .split("\n")
        .forEach(function(v) {
          code_list.push(v);
        });

      let fcode = "";
      if (code_list.length > 1) {
        let length = code_list[code_list.length - 1].match(/(^(?:\s|\t)+)/);
        length = length[0].length;
        for (let i = 1; i < code_list.length; i++) {
          code_list[i] = code_list[i].slice(length);
        }
        for (let i = 0; i < code_list.length; i++) {
          fcode = fcode + code_list[i] + "\n";
        }
      } else {
        fcode = code_list[0];
      }
      return fcode;
    }
  }
};
</script>

<style lang="scss">
.demoblock-title {
  margin: 30px 0 20px;
  font-weight: 400;
  color: #1f2f3d;
}
.demoblock-des {
  font-size: 14px;
  color: #5e6d82;
  margin: 10px 0;
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
  .code {
    transition: max-height 0.5s ease-out;
    overflow: hidden;
    max-height: 0;
  }
  .demo-btn {
    cursor: pointer;
    position: relative;
    margin-top: -1px;
    height: 44px;
    box-sizing: border-box;
    background-color: #fff;
    border-top: 1px solid #eaeefb;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    color: #d3dce6;
  }
}
</style>
