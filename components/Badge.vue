<template>
  <span
    class="absolute inline-flex items-center justify-center w-8 h-8 mr-4 text-xl text-white rounded-full -left-12"
    :class="`${color}`"
  >
    <slot>&#10003;</slot>
  </span>
</template>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      color?: string
    }>(),
    {
      // Must be complete Tailwind classes otherwise they will
      // not be included in build
      color: "bg-emerald-400",
    },
  )
</script>
