<template>
  <div class="flex justify-center items-center text-center">
    <div
      class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light"
    >
      &copy; {{ copyrightDate }}.
      <a
        href="https://github.com/gabrielcaiana"
        target="__blank"
        class="font-general-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
        >{{ projectName }}</a
      >
      . Developed by
      <a
        href="https://gabrielcaiana.com"
        target="__blank"
        class="font-general-medium text-secondary-dark dark:text-secondary-light uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
        >{{ author }}</a
      >
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const projectName = 'Portfolio'
const author = 'Gabriel Caiana'

const copyrightDate = computed(() => new Date().getFullYear())
</script>
