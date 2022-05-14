<template>
  <i
    :height="size"
    :width="size"
    :data-feather="name"
    :class="$attrs.class"
  ></i>
</template>

<script setup>
import feather from 'feather-icons'
import { onMounted, onUpdated } from 'vue'
defineProps({
  name: {
    type: String,
    default: null,
  },
  size: {
    type: String,
    default: '24',
  },
})

onMounted(() => {
  feather.replace()
})

onUpdated(() => {
  feather.replace()
})
</script>
