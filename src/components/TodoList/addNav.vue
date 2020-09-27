<template>
  <div class="v-addNav">
    <div class="content">
      <div class="title">todoList</div>
      <div class="add-input">
        <el-input
          size="small"
          v-model="addContent"
          @keyup.enter.native="addHandler"
          placeholder="请输入内容"
        ></el-input>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'vue-property-decorator'

@Component({
  name: 'AddNav',
  data () {
    return {
      addContent: ''
    }
  }
})
export default class AddNav extends Vue {
  addContent?: string
  @Emit('addTask')
  addHandler () {
    return this.addContent
  }
}
</script>

<style lang="scss">
.v-addNav {
  height: 60px;
  width: 100%;
  background: #2c3e50;
  margin-bottom: 10px;

  .content {
    max-width: 700px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .title {
    color: #fff;
    font-size: 18px;
    font-weight: bolder;
  }

  .add-input{
    .el-input, .el-input__inner {
      width: 364px;
      outline: none;
      border-radius: 4px;
    }
  }
}
</style>
