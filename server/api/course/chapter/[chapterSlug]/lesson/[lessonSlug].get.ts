import { PrismaClient } from "@prisma/client"
import protecRoute from "~~/server/utils/protecRoute"

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  // We allow users to access the first lesson without being logged in
  if (event.context.params.chapterSlug !== "1-chapter-1") {
    protecRoute(event)
  }

  const { chapterSlug, lessonSlug } = event.context.params

  const lesson = await prisma.lesson.findFirst({
    where: {
      slug: lessonSlug,
      Chapter: {
        slug: chapterSlug,
      },
    },
  })

  if (!lesson) {
    throw createError({
      statusCode: 404,
      statusMessage: "Lesson not found",
    })
  }

  console.log("lesson", lesson)
  return {
    ...lesson,
    path: `/course/chapter/${chapterSlug}/lesson/${lessonSlug}`,
  }
})
