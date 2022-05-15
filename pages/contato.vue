<template>
  <div
    class="container mx-auto flex flex-col-reverse md:flex-row md:py-10 md:mt-20"
  >
    <ContactForm />

    <ContactDetails :contacts="contacts" />
  </div>
</template>

<script>
import ContactForm from '~/components/contact/ContactForm.vue'
export default {
  components: {
    ContactForm,
  },
  data: () => {
    return {
      contacts: [
        {
          id: 1,
          name: 'São Paulo, Brasil',
          icon: 'map-pin',
        },
        {
          id: 2,
          name: 'gabrielcaianaguedes@gmail.com',
          icon: 'mail',
        },
        {
          id: 3,
          name: '11 94987-5163',
          icon: 'phone',
        },
      ],
    }
  },
}
</script>
