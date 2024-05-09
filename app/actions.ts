import { PrismaClient } from '@prisma/client'

export async function getPosts() {
    const prisma = new PrismaClient()
    const posts = await prisma.users.findMany()
  
    return posts;
  }