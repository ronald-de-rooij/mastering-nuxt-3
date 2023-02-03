export default async () => {
  const course = await useCourse()
  return {
    ...course.value.chapters[0].lessons[0],
    path: `/course/chapter/${course.value.chapters[0].slug}/lesson/${course.value.chapters[0].lessons[0].slug}`,
  }
}
