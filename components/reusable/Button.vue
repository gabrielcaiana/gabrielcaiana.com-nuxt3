<template>
  <button>{{ title }}</button>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
