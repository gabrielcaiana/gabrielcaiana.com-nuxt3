import { v4 as uuidv4 } from 'uuid'
import { defineStore } from 'pinia'

export const useClients = defineStore({
  id: 'clients',
  state: () => ({
    clients: [
      {
        id: uuidv4(),
        title: 'Petlove',
        img: '/brands/petlove.png',
      },
      {
        id: uuidv4(),
        title: 'OnClass',
        img: '/brands/onclass.png',
      },
      {
        id: uuidv4(),
        title: 'I4pro',
        img: '/brands/i4pro.png',
      },
      {
        id: uuidv4(),
        title: 'Signa Consultoria e sistemas',
        img: '/brands/signa.png',
      },
      {
        id: uuidv4(),
        title: 'AGB Computadores',
        img: '/brands/agb.png',
      },
      {
        id: uuidv4(),
        title: 'Freelance',
        img: '/brands/freelancer.png',
      },
    ],
  }),
})
