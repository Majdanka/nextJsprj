'use server';

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

export async function fetchPostsPages(title: string, take: number) {
  const posts = await prisma.post.findMany({
    where: {
      title: {
        contains: title,
      },
    },
  });
  const pages = Math.ceil(posts.length / take);

  return pages;
}


export async function fetchPosts({ title, page, take } : { title: string, page: number, take: number}) {
  noStore();
  return await prisma.post.findMany({
    where: {
      title: {
        contains: title,
      },
    },
    skip: (page - 1) * take,
    take: take,
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function fetchAuthorById({ id } : { id: number }) {
  return await prisma.user.findUnique({
    where: {
      id
    },
  });
}

export async function fetchAuthorsPostsCount(authorId: number) {
  noStore();
  return await prisma.post.count({
    where: {
      authorId
    }
  });
}

export async function fetchAuthors()
{
  return await prisma.user.findMany();
}

export async function deletePostWithId({id} : {id: number | undefined}) {
  
  if (id) {
    return await prisma.post.delete({
      where: {
        id
      }
    });
  }
}

export async function addPostDb({ title, content, authorId } : { title: string, content: string, authorId: number }) {
  return await prisma.post.create({
    data: {
      title,
      content,
      authorId
    }
  });
}