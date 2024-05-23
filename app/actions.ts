"use server";

import prisma from "./prisma";
import { unstable_noStore as noStore } from "next/cache";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { cookies } from "next/headers";

export async function fetchRecentPosts({ take }: { take: number }) {
  noStore();
  return await prisma.post.findMany({
    take,
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function fetchPostById({ id }: { id: number }) {
  return await prisma.post.findFirst({
    where: {
      id,
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

export async function fetchPosts({
  title,
  page,
  take,
}: {
  title: string;
  page: number;
  take: number;
}) {
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

export async function fetchCurrentUser({ userName }: { userName: string }) {
  return await prisma.user.findFirst({
    where: {
      userName,
    },
  });
}

export async function fetchAuthorById({ id }: { id: number }) {
  return await prisma.user.findUnique({
    where: {
      id,
    },
  });
}

export async function fetchAuthorsPostsCount(authorId: number) {
  noStore();
  return await prisma.post.count({
    where: {
      authorId,
    },
  });
}

export async function fetchAuthors({ userName }: { userName: string }) {
  return await prisma.user.findMany({
    where: {
      NOT: {
        userName,
      },
    },
  });
}

export async function fetchAuthorsForPage({
  term,
  page,
  take,
}: {
  term: string;
  page: number;
  take: number;
}) {
  noStore();
  return await prisma.user.findMany({
    where: {
      userName: {
        contains: term,
      },
    },
    skip: (page - 1) * take,
    take: take,
  });
}

export async function fetchAuthorPages(take: number) {
  const totalAuthors = (await prisma.user.count()) - 1;
  return Math.ceil(totalAuthors / take);
}

export async function deletePostWithId({ id }: { id: number | undefined }) {
  if (id) {
    return await prisma.post.delete({
      where: {
        id,
      },
    });
  }
}

export async function addPost(formData: FormData) {
  let title = formData.get("title")?.toString();
  let content = formData.get("content")?.toString();
  let authorId = formData.get("authorId")?.toString();
  if (!title || !content || !authorId) {
    throw new Error("Title and content are required");
  }
  await prisma.post.create({
    data: {
      title,
      content,
      authorId: parseInt(authorId),
    },
  });

  revalidatePath("/dashboard");
  revalidatePath("/dashboard/posts");
  redirect("/dashboard/posts");
}

export async function editPost(formData: FormData) {
  let title = formData.get("title")?.toString();
  let content = formData.get("content")?.toString();
  let postId = formData.get("postId")?.toString();
  if (!title || !content || !postId) {
    throw new Error("Title, content and postId are required");
  }
  await prisma.post.update({
    where: {
      id: parseInt(postId),
    },
    data: {
      title,
      content,
    },
  });

  revalidatePath("/dashboard");
  revalidatePath("/dashboard/posts");
  redirect("/dashboard/posts");
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
  redirect("/dashboard");
}

export async function changeUsername(formData: FormData) {
  let username = formData.get("username")?.toString();
  let password = formData.get("password")?.toString();
  let id = formData.get("current")?.toString();
  if (!username || !password || !id) {
    throw new Error("Username and password are required");
  }
  const author = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  const oldPassword = author?.password;
  if (oldPassword !== password) {
    throw new Error("Incorrect password");
  }

  await prisma.user.update({
    where: {
      id: parseInt(id),
    },
    data: {
      userName: username,
    },
  });
  cookies().set("userName", username);
  redirect(`/dashboard/users/${id}/`);
}

export async function changePassword(formData: FormData) {
  let password = formData.get("password")?.toString();
  let newPassword = formData.get("newpassword")?.toString();
  let repeat = formData.get("reppassword")?.toString();
  let id = formData.get("current")?.toString();
  if (!password || !newPassword || !id || !repeat) {
    throw new Error("All inputs are required");
  }
  if (repeat !== newPassword) {
    throw new Error("Passwords do not match");
  }
  if (password === newPassword) {
    throw new Error("New password cannot be the same as the old one");
  }
  const author = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  const oldPassword = author?.password;
  if (oldPassword !== password) {
    throw new Error("Incorrect password");
  }

  await prisma.user.update({
    where: {
      id: parseInt(id),
    },
    data: {
      password: newPassword,
    },
  });

  redirect(`/dashboard/users/${id}`);
}

export async function addUser(formData: FormData) {
  let username = formData.get("username")?.toString();
  let password = formData.get("password")?.toString();
  let repeatPassword = formData.get("repeatPassword")?.toString();
  if (!username || !password || !repeatPassword) {
    throw new Error("All fields are required");
  }
  if (password !== repeatPassword) {
    throw new Error("Passwords do not match");
  }
  await prisma.user.create({
    data: {
      userName: username,
      password,
    },
  });

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
}

export async function deleteUser(formData: FormData) {
  let userId = formData.get("userId")?.toString();
  if (!userId) {
    throw new Error("User ID is required");
  }

  await prisma.post.updateMany({
    where: {
      authorId: parseInt(userId),
    },
    data: {
      authorId: 1,
    },
  });

  await prisma.user.delete({
    where: {
      id: parseInt(userId),
    },
  });

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
}
