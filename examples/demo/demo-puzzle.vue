<template>
  <div>
    <demo-block :title="'九宫格拼图'" :sourcecode="sourcecode" :des="'canvas版本的拼图'">
      <div slot="demo">
        <Puzzle
          ref="Puzzle"
          class="puzzle"
          width="400"
          height="400"
          imgUrl="http://f1.img4399.com/box~cp/hd/2019/08/28/17_RnoDiT.1075x1075.jpg?t=1566983183"
          limitNum="5"
          @every="every"
          @success="success"
          @fail="fail"
        ></Puzzle>
        <p class="step">剩余步数：{{ step }}</p>
        <div class="vip" @click="vip">一键完成</div>
        <div class="again" @click="again">重新开始</div>
      </div>
    </demo-block>
    <demo-table :title="'API'" :introduction="'属性说明：'" :data="api"></demo-table>
    <demo-table :title="'事件'" :introduction="'事件说明：'" :data="event" :type="'event'"></demo-table>
    <demo-table :title="'内部方法'" :introduction="'事件说明：'" :data="method" :type="'method'"></demo-table>
    <!-- @every="every"
        @success="success"
    @fail="fail"-->
  </div>
</template>

<script>
import DemoBlock from "../layout/article/demo-block";
import DemoTable from "../layout/article/demo-table";
import Puzzle from "../../package/puzzle/src/main";
export default {
  data() {
    return {
      sourcecode: `
            <template>
              <Puzzle
                ref="Puzzle"
                class="puzzle"
                width="400"
                height="400"
                imgUrl="http://f1.img4399.com/box~cp/hd/2019/08/28/17_RnoDiT.1075x1075.jpg?t=1566983183"
                limitNum="5"
                @every="every"
                @success="success"
                @fail="fail"
              ></Puzzle>
              <p class="step">剩余步数：{{step}}</p>
              <div class="vip" @click="vip">一键完成</div>
              <div class="again" @click="again">重新开始</div>
            <\/template>

            <script>
              export default {
                data() {
                  return {
                    step: 5;
                  }
                },
                methods: {
                  every(step) {
                    this.step = step;
                  },
                  success() {
                    alert("你得到了一个胖迪");
                  },
                  fail() {
                    // this.$refs.Puzzle.instance.recovery();
                    alert("你失去了一个胖迪！！");
                    this.step = 5;
                  },
                  vip() {
                    this.$refs.Puzzle.instance.vip();
                  },
                  again() {
                    this.$refs.Puzzle.instance.recovery();
                  }
                }
              }
            <\/script>
      `,
      api: [
        {
          parameter: "width",
          description: "canvas的宽度",
          dataTypes: "number",
          optional: "",
          default: "400"
        },
        {
          parameter: "height",
          description: "canvas的长度",
          dataTypes: "number",
          optional: "",
          default: "400"
        },
        {
          parameter: `imgUrl`,
          description: `图片地址(允许跨域)`,
          dataTypes: `string`,
          optional: `url/base64(推荐)`,
          default: `url`
        },
        {
          parameter: `limitNum`,
          description: `限制几步内完成`,
          dataTypes: `number`,
          optional: ``,
          default: `200`
        }
      ],
      event: [
        {
          parameter: "@every",
          description: "每走一步的回调",
          arguments: "step"
        },
        {
          parameter: "@success",
          description: "成功回调",
          arguments: ""
        },
        {
          parameter: "@fail",
          description: "失败回调",
          arguments: ""
        }
      ],
      method: [
        {
          parameter: "vip",
          description: "一键完成",
          arguments: ""
        },
        {
          parameter: "recovery",
          description: "重新开始",
          arguments: ""
        }
      ],
      step: "5"
    };
  },
  methods: {
    vip() {
      this.$refs.Puzzle.instance.vip();
    },
    again() {
      this.$refs.Puzzle.instance.recovery();
    },
    every(step) {
      this.step = step;
    },
    success() {
      alert("你得到了一个胖迪");
    },
    fail() {
      // this.$refs.Puzzle.instance.recovery();
      alert("你失去了一个胖迪！！");
      this.step = 5;
    }
  },
  components: {
    Puzzle,
    DemoBlock,
    DemoTable
  }
};
</script>

<style></style>
