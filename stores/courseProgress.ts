import { defineStore } from "pinia"

export const useCourseProgress = defineStore("courseProgress", () => {
  // Initialize progress from local storage
  const progress = useLocalStorage("courseProgress", {})

  const initialized = ref(false)

  async function initialize() {
    // If the course has already been initialized, return
    if (initialized.value) return
    initialized.value = true
  }

  return {
    initialize,
    progress,
  }
})
