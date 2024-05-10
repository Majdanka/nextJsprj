import prisma from "./prisma";

export async function getRecentPosts() {
  return await prisma.post.findMany({
    take: 5,
    orderBy: {
      createdAt: "desc",
    },
  });
}