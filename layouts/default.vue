<template>
  <div
    class="bg-secondary-light dark:bg-primary-dark min-h-screen flex flex-col"
  >
    <AppHeader />

    <main>
      <slot />
    </main>

    <AppFooter />

    <div
      class="flex space-x-2 mr-8 mb-6 right-0 bottom-0 z-50 fixed items-center sm:space-x-4"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
