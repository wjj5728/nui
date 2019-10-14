<template>
  <div>
    <DemoBlock :title="'九宫格拼图'" :sourcecode="sourcecode">
      <div slot="demo">
        <Puzzle
          ref="Puzzle"
          class="puzzle"
          width="400"
          height="400"
          imgUrl="http://f1.img4399.com/box~cp/hd/2019/08/28/17_RnoDiT.1075x1075.jpg?t=1566983183"
          limitNum="5"
        ></Puzzle>
      </div>
    </DemoBlock>
    <!-- @every="every"
        @success="success"
    @fail="fail"-->
  </div>
</template>

<script>
import DemoBlock from "../layout/article/demo-Block";
import Puzzle from "../../package/puzzle/src/main";
export default {
  data() {
    return {
      sourcecode: `<template>
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
      `
    };
  },
  components: {
    Puzzle,
    DemoBlock
  }
};
</script>

<style></style>
