'use server';

import prisma from "./prisma";
import { unstable_noStore as noStore } from "next/cache";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

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

export async function fetchCurrentUser({userName}: {userName: string}) {
  return await prisma.user.findFirst({
    where: {
      userName
    }
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

export async function fetchAuthors({userName}: {userName: string})
{
  return await prisma.user.findMany(
    {
      where: {
        NOT:
        {
          userName
        }
      }
    }
  )
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

export async function addPost(formData: FormData) {
  let title = formData.get("title")?.toString()
  let content = formData.get("content")?.toString()
  if(!title || !content) {
    throw new Error("Title and content are required")
  }
  const { authorId } = { authorId: 1 };
  await prisma.post.create({
    data: {
      title,
      content,
      authorId
    }
  });

  revalidatePath("/dashboard");
  revalidatePath("/dashboard/posts");
  redirect("/dashboard/posts");
}

export async function editPost(formData: FormData) {
  let title = formData.get("title")?.toString()
  let content = formData.get("content")?.toString()
  let postId = formData.get("postId")?.toString()
  if(!title || !content || !postId) {
    throw new Error("Title, content and postId are required")
  }
  await prisma.post.update({
    where: {
      id: parseInt(postId)
    },
    data: {
      title,
      content
    }
  });

  revalidatePath("/dashboard");
  revalidatePath("/dashboard/posts");
  redirect("/dashboard/posts");
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}