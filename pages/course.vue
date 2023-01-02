<template>
  <div>
    <div class="mb-12 prose">
      <h1>
        <span class="font-medium">
          <span class="font-bold">{{ title }}</span>
        </span>
      </h1>
    </div>

    <div class="flex flex-row justify-center flex-grow">
      <div
        class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] max-w-[30ch] flex flex-col"
      >
        <h3>Chapters</h3>
        <div
          class="flex flex-col mb-4 space-y-1"
          v-for="chapter in chapters"
          :key="chapter.slug"
        >
          <h4>{{ chapter.title }}</h4>
          <NuxtLink
            v-for="(lesson, index) in chapter.lessons"
            :key="lesson.slug"
            class="flex flex-row px-4 py-1 -mx-4 space-x-1 font-normal prose-sm no-underline"
            :to="lesson.path"
            :class="{
              'text-blue-500': lesson.path === $route.fullPath,
              'text-gray-600': lesson.path !== $route.fullPath,
            }"
          >
            <span class="text-gray-500">{{ index + 1 }}.</span>
            <span>{{ lesson.title }}</span>
          </NuxtLink>
        </div>
      </div>

      <div class="prose p-12 bg-white rounded-md w-[65ch]">
        <NuxtErrorBoundary>
          <NuxtPage />
          <template #error="{ error }">
            <p>
              Oh no, something went wrong with the lesson!
              <code>{{ error }}</code>
            </p>
            <p>
              <button
                class="px-3 py-1 font-bold text-white bg-gray-500 rounded hover:cursor-pointer"
                @click="resetError(error)"
              >
                Reset
              </button>
            </p>
          </template>
        </NuxtErrorBoundary>
      </div>
    </div>
  </div>
</template>

<script setup>
  const { chapters, title } = useCourse()

  const resetError = async (error) => {
    await navigateTo(
      "/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3",
    )
    error.value = null
  }
</script>
