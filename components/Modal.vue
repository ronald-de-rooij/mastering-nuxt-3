<template>
  <div
    class="fixed inset-0 flex flex-col items-center justify-center backdrop-blur-xl backdrop-brightness-50 w-100vw h-100vh"
  >
    <div
      class="absolute flex items-center justify-center w-12 h-12 text-2xl text-white transition rounded-full cursor-pointer bg-slate-600 hover:bg-slate-500 top-4 right-4"
      @click="$emit('close')"
    >
      &#10005;
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
  const previousOverflow = ref("")

  onMounted(() => {
    // Lock the scrollbar by removing overflow if we have any
    previousOverflow.value = document.body.style.overflow
    document.body.style.overflow = "hidden"
  })

  onBeforeUnmount(() => {
    // Restore the overflow and position
    document.body.style.overflow = previousOverflow.value
  })
</script>
