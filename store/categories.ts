import { v4 as uuidv4 } from 'uuid'
import { defineStore } from 'pinia'

export const useCategories = defineStore({
  id: 'categories',
  state: () => ({
    categories: [
      {
        id: uuidv4(),
        value: 'web',
        name: 'Aplicação web',
      },
    ],
  }),
})
