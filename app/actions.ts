import prisma from "./prisma";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchRecentPosts({ take } : { take: number}) {
  noStore();
  return await prisma.post.findMany({
    take,
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function fetchPostById({ id } : { id: number }) {
  return await prisma.post.findUnique({
    where: {
      id
    },
  });
}

export async function fetchPostsPages(title: string) {
  noStore()
  const posts = await prisma.post.findMany({
    where: {
      title: {
        contains: title,
      },
    },
  });
  const pages = Math.ceil(posts.length / 25);

  return pages;
}


export async function fetchPosts({ title, page } : { title: string, page: number }) {
  return await prisma.post.findMany({
    where: {
      title: {
        contains: title,
      },
    },
    skip: (page - 1) * 10,
    take: 25,
    orderBy: {
      createdAt: "desc",
    },
  });
}