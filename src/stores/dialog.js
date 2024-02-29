import { defineStore } from 'pinia'
import { ref } from 'vue'
export const dialogStore = defineStore('dialogStore', () => {
  const dialogVisible = ref(false)

  const editDialogVisible = (val) => {
    dialogVisible.value = val
  }

  return {
    dialogVisible,
    editDialogVisible,
  }
})
