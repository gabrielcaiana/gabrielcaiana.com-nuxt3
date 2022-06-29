<template>
  <div>
    <AboutMe class="container mx-auto" />
    <AboutClients class="container mx-auto" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Sobre',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Conheça um pouco mais sobre minha jornada como desenvolvedor',
        },
      ],
    }
  },
}
</script>
