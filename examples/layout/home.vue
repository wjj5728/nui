<template>
  <div>
    <header class="header">
      <div class="title">NUI</div>
    </header>
    <article class="container">
      <div id="slider">
        <ul class="nav-item" v-for="(item, index) in navConfig" :key="index">
          <header
            v-if="!item.children && !item.groups"
            @click="component = item.component"
          >
            {{ item.name }}
          </header>
          <header v-if="item.children || item.groups">{{ item.name }}</header>
          <ul v-if="item.children">
            <li
              v-for="(child, j) in item.children"
              :key="j"
              @click="component = child.component"
            >
              {{ child.name }}
            </li>
          </ul>
          <ul v-if="item.groups">
            <li v-for="(group, j) in item.groups" :key="j">
              <div class="group-name">{{ group.groupName }}</div>
              <ul v-for="(groupitem, z) in group.list" :key="z">
                <li @click="component = groupitem.component">
                  {{ groupitem.name }}
                </li>
              </ul>
            </li>
          </ul>
        </ul>
      </div>
      <div id="content">
        <component :is="component"></component>
      </div>
    </article>
  </div>
</template>

<script>
let examples = require.context("../demo/", true, /\.vue$/);
let comps = {};
examples.keys().forEach(element => {
  let key = element.replace(/(.*\/)*([^.]+).*/gi, "$2");
  comps[key] = () => import("../demo/" + key + ".vue");
});
import navConfig from "../nav.config.json";
export default {
  name: "home",
  data() {
    return {
      component: "",
      navConfig: navConfig
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.component = Object.keys(comps)[0];
    });
  },
  components: {
    ...comps
  }
};
</script>

<style lang="scss">
.header {
  width: 100%;
  margin: 0 auto;
  position: fixed;
  left: 0;
  top: 0;
  height: 80px;
  z-index: 100;
  background-color: #fff;
  line-height: 80px;
  .title {
    height: 100%;
    width: 1140px;
    font-size: 26px;
    margin: 0 auto;
    text-align: left;
    color: #66cccc;
    font-weight: bold;
    padding: 0 10px;
    border-bottom: 1px solid #eee;
  }
}
.container {
  height: calc(100% - 100px);
  width: 1140px;
  margin: 0 auto;
  padding: 10px 0;
  top: 80px;
  position: relative;
  display: flex;
  text-align: left;
  #slider {
    width: 200px;
    position: fixed;
    height: 80%;
    top: 120px;
    margin-right: 40px;
    overflow: auto;
    .nav-item {
      header {
        font-size: 15px;
        color: #333;
        line-height: 40px;
        height: 40px;
        margin: 0;
        padding: 0;
        text-decoration: none;
        display: block;
        position: relative;
        font-weight: 700;
        cursor: pointer;
      }
      .group-name {
        color: #999;
        font-size: 12px;
      }
      ul {
        li {
          display: block;
          color: #444;
          min-height: 40px;
          line-height: 40px;
          font-size: 14px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          transition: 0.15s ease-out;
          font-weight: 400;
          cursor: pointer;
          &:hover {
            color: #66cccc;
          }
        }
      }
    }
  }
  #content {
    margin-top: 30px;
    margin-left: 240px;
    width: 100%;
  }
}
</style>
