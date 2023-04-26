<template>
  <Modal @close="$emit('close')">
    <div class="w-full max-w-2xl p-8 bg-slate-200 rounded-xl">
      <form>
        <h2 class="text-xl font-bold text-center">Buying {{ course.title }}</h2>
        <div class="px-8 py-6 mt-8 text-base bg-white rounded shadow-md width">
          <div class="flex items-center justify-between w-full mb-8">
            <label class="font-bold"> Email </label>
            <input
              class="w-full ml-6 text-left input focus:outline-none"
              type="email"
              autocomplete="email"
              v-model="email"
              placeholder="your@email.com"
              required
            />
          </div>
        </div>

        <button
          class="flex items-center justify-center w-full h-12 px-16 mt-4 font-sans text-lg font-bold text-black transition bg-yellow-300 rounded cursor-pointer focus:outline-none focus:shadow-outline hover:bg-yellow-200"
        >
          <div>Pay $97</div>
        </button>
      </form>
    </div>
  </Modal>
</template>

<script setup lang="ts">
  const course = await useCourse()

  const email = ref()
</script>
