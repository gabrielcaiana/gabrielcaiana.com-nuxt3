<template>
  <div class="container mx-auto">
    <AppBanner />

    <ProjectsGrid />

    <div class="mt-5 sm:mt-14 flex justify-center">
      <NuxtLink
        to="/projetos"
        class="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-green-400 hover:bg-green-500 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
        aria-label="Ver mais projetos"
      >
        <Button title="Ver mais projetos" />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Início',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Bem vindo ao meu site pessoal',
        },
      ],
    }
  },
}
</script>
