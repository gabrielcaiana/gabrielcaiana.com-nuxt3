import { v4 as uuidv4 } from 'uuid'
import { defineStore } from 'pinia'

export const useAboutMe = defineStore({
  id: 'aboutMe',
  state: () => ({
    aboutMe: [
      {
        id: uuidv4(),
        bio: 'Sou um desenvolvedor de software de 25 anos, trabalho com tecnologias como (Javascript, Typescript, Vue, Nuxt, Vuex, Pinia, Jest, GraphQL, Storybook, Vite, Vuetify, Tailwind, Node, Cypress), amo construir aplicações web utilizando o ecosistema do VueJS, sempre focado em entregar uma boa experiência para os usuários seguindo as melhores práticas de UI/UX.',
      },
    ],
  }),
})
