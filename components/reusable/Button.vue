<template>
  <button>{{ title }}</button>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
