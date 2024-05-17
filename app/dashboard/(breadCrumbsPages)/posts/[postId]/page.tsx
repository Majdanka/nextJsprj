import { Metadata, ResolvingMetadata } from "next";
import {
  fetchPostById,
  fetchAuthorById,
  deletePostWithId,
} from "@/app/actions";
import { Suspense } from "react";
import PostButtons from "@/app/components/dashboard/postButtons";

//dynamic metadata

export default async function Post({ params }: { params: { postId: string } }) {
  const post = await fetchPostById({ id: Number(params.postId) });
  const author = await fetchAuthorById({ id: Number(post?.authorId) });

  const formatedDate = post?.createdAt
    ? new Date(post.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unknown Date";

  return (
    <>
      <Suspense fallback="Loading post data...">
        <div className="w-full flex flex-col items-center h-[86vh]">
          <h1 className="text-3xl font-bold pt-3">{post?.title}</h1>
          <p className="text-slate-400 text-md">
            Written on {formatedDate} by {author?.userName}
          </p>
          <p className="text-lg pt-3">{post?.content}</p>
        </div>
      </Suspense>
      <PostButtons post={post} href="/dashboard/posts" />
    </>
  );
}
