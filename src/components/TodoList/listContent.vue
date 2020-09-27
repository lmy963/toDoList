<template>
  <div class="v-list-content">
    <div class="top">
      <div class="title">{{ title }}</div>
      <div class="count">{{ list.length }}</div>
    </div>
    <div class="list">
      <div class="list-item" v-for="(item, index) in list" :key="index">
        <div class="checked">
          <el-checkbox
            :value="item.status === 'finished'"
            size="mini"
            @change="updateStatus(item.name)"
          >
          </el-checkbox>
        </div>
        <div :class="['txt', item.status === 'finished' ? 'delline' : '']">
          {{ item.name }}
        </div>
        <div class="del el-icon-delete" @click="deleteTask(item.name)"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
@Component({
  name: 'ListContent'
})
export default class ListContent extends Vue {
  @Prop()
  private list!: Array<Record<string, any>>

  @Prop()
  private title?: string

  get len () {
    return this.list.length
  }

  @Emit('updateStatus')
  updateStatus (name: string) {
    return name
  }

  @Emit('deleteTask')
  deleteTask (name: string) {
    return name
  }
}
</script>

<style lang="scss">
.v-list-content {
  max-width: 700px;
  margin: 0 auto;
  .top {
    height: 32px;
    width: 700px;
    line-height: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px auto 16px;
    background: #efefef;
    border-radius: 40px;
    padding: 0 12px;
    box-sizing: border-box;
    overflow: hidden;
  }
  .list {
    .list-item {
      height: 32px;
      width: 700px;
      padding: 0 16px;
      border-radius: 8px;
      box-sizing: border-box;
      border: 1px solid #2c3e50;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      .txt {
        flex: 1;
        margin: 0 12px;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .delline {
        text-decoration-line: line-through;
      }
      .del {
        cursor: pointer;
      }
    }
  }
}
</style>
