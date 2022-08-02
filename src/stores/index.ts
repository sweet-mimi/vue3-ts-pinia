import { defineStore } from 'pinia'
import { getApiList } from '../server/index'

export const useInfoStore = defineStore({
  id: 'info',
  state: () => ({
    list: []
  }),
  getters: {

  },
  actions: {
    async getList() {
      const result = await getApiList()
      // console.log(result);
      this.list = result.data.list
    }
  }
})
