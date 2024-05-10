import prisma from "./prisma";

export async function fetchRecentPosts({ take } : { take: number}) {
  return await prisma.post.findMany({
    take,
    orderBy: {
      createdAt: "desc",
    },
  });
}