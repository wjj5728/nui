<template>
  <div>
    <h3 class="demo-table-title">{{ title }}</h3>
    <p class="demo-table-introduction">{{ introduction }}</p>
    <table class="demo-table-main">
      <thead :style="{ textAlign: align }">
        <tr>
          <th v-for="item in thead" :key="item">{{ item }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item_tr, index) in data" :key="index">
          <td v-for="(item_td, key) in item_tr" :key="key">
            <span
              v-if="item_td != '' && item_td != null"
              :class="{
                parameter: key === 'parameter' && type === 'demo',
                dataTypes: key === 'dataTypes' && type === 'demo',
                description: key === 'description' && type === 'demo'
              }"
              >{{ item_td }}</span
            >
            <span v-else>—</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "demo-table",
  props: {
    title: {
      type: String,
      default: ""
    },
    introduction: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "default"
    },
    thead: {
      type: Array,
      default: function() {
        if (this.type == "default") {
          return ["参数", "说明", "类型", "可选值", "默认值"];
        } else if (this.type == "event" || this.type == "method") {
          return ["事件名", "说明", "参数"];
        }
      }
    },
    data: {
      type: Array,
      default: function() {
        return [
          {
            parameter: "parameter",
            description: "description",
            dataTypes: "dataTypes",
            optional: "optional",
            default: "default"
          }
        ];
      }
    },
    align: {
      type: String,
      default: "left"
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.demo-table-title {
  margin: 55px 0 20px;
  font-weight: 400;
  color: #1f2f3d;
}
.demo-table-introduction {
  font-size: 14px;
  color: #5e6d82;
  margin: 10px 0 20px;
}
.demo-table-main {
  width: 100%;
  border-collapse: collapse;
  thead {
    tr {
      border-bottom: 1px solid #dcdfe6;
      th {
        padding: 15px;
        max-width: 250px;
        font-size: 14px;
        font-weight: 400;
        color: #909399;
        white-space: nowrap;
        &:first-child {
          padding-left: 10px;
        }
      }
    }
  }
  tbody {
    tr {
      border-bottom: 1px solid #dcdfe6;
      td {
        padding: 15px;
        max-width: 250px;
        font-size: 14px;
        font-weight: 400;
        color: #606266;
        white-space: normal;
        &:first-child {
          padding-left: 10px;
        }
        .parameter {
          color: #003a8c;
        }
        .dataTypes {
          color: #bd6f9c;
        }
        .description {
          display: inline-block;
          max-width: 300px;
        }
      }
    }
  }
}
</style>
