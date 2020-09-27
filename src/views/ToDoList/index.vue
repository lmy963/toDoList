<template>
  <div class="v-todolist">
    <add-nav @addTask="addTask" ref="addnav"></add-nav>
    <list-content
      title="Doing"
      :list="doingList"
      @updateStatus="updateStatus"
      @deleteTask="deleteTask"
    ></list-content>
    <list-content title="Finshed"
                  :list="finsihedList"
                  @updateStatus="updateStatus"
                  @deleteTask="deleteTask">
    </list-content>
    <!--    <div>-->
    <!--      <div v-for="(item, index) in taskList" :key="index">{{ item }}</div>-->
    <!--    </div>-->
  </div>
</template>

<script lang="ts">
import AddNav from '@/components/TodoList/addNav'
import ListContent from '@/components/TodoList/listContent'
import { watch } from '@vue/composition-api'
import { Vue, Component, Watch } from 'vue-property-decorator'
@Component({
  name: 'TodoList',
  data () {
    return {
      taskList: []
    }
  },
  components: {
    AddNav,
    ListContent
  }
})
export default class TodoList extends Vue {
  taskList!: Array<Record<string, any>>
  get doingList () {
    return this.taskList.filter(
      item => item.status === 'doing'
    )
  }

  get finsihedList () {
    return this.taskList.filter(
      item => item.status === 'finished'
    )
  }

  addTask (txt: string) {
    this.isExist(txt) ? this.showExist() : this.pushTask(txt)
    this.$set(this.$refs.addnav, 'addContent', '')
  }

  pushTask (txt: string) {
    this.taskList.push({ name: txt, status: 'doing' })
  }

  showExist () {
    // alert('this task is already exist!')
    this.$message.error('this task is already exist!')
  }

  getIndex (name: string) {
    return this.taskList.findIndex(item => item.name === name)
  }

  isExist (txt: string) {
    return this.getIndex(txt) > -1
  }

  updateStatus (name: string) {
    const index = this.getIndex(name)
    const status = this.taskList[index].status
    this.taskList[index].status = status === 'finished' ? 'doing' : 'finished'
  }

  deleteTask (name: string) {
    const index = this.getIndex(name)
    this.taskList.splice(index, 1)
  }
  mounted() {
    this.taskList = localStorage['taskList'] ? JSON.parse(localStorage['taskList']) : []
  }
  @Watch('taskList', {deep: true})
  hasChange(newVal:any) {
    localStorage.setItem('taskList', JSON.stringify(this.taskList)) 
  }
}
</script>

<style lang="scss">
.v-todolist {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
