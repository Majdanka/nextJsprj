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
      id,
    },
  });
}

export async function fetchPostsPages() {
  const posts = await prisma.post.findMany();
  const pages = Math.ceil(posts.length / 10);

  return pages;
}

export async function fetchPotsByPage({page} : {page: number}) {
  return await prisma.post.findMany({
    skip: (page - 1) * 10,
    take: 10,
    orderBy: {
      createdAt: "desc",
    },
  });
}