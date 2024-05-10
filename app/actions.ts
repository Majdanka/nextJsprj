import prisma from "./prisma";

export async function getPosts() {
  return await prisma.post.findMany({
    take: 5,
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function addPost(title: string, content: string, authorId: number) {
    return await prisma.post.create({
    data: {
      title,
      content,
      authorId
    },
  });
}