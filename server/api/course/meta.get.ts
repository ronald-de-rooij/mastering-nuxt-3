import { PrismaClient, Prisma } from "@prisma/client"

const prisma = new PrismaClient()

// Define ta type that only contains a subset of the fields
const lessonSelect = Prisma.validator<Prisma.LessonArgs>()({
  select: {
    title: true,
    slug: true,
    number: true,
  },
})

// This type will include a user and all their posts
export type LessonOutline = Prisma.LessonGetPayload<typeof lessonSelect>

const chapterSelect = Prisma.validator<Prisma.ChapterArgs>()({
  select: {
    title: true,
    slug: true,
    number: true,
    lessons: lessonSelect,
  },
})

export type ChapterOutline = Prisma.ChapterGetPayload<typeof chapterSelect>

const courseSelect = Prisma.validator<Prisma.CourseArgs>()({
  select: {
    title: true,
    chapters: chapterSelect,
  },
})

export type CourseOutline = Prisma.CourseGetPayload<typeof courseSelect>

export default eventHandler(() => {
  return prisma.course.findFirst(courseSelect)
})
