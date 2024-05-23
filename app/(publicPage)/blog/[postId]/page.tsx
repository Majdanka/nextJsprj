import { Metadata, ResolvingMetadata } from "next";
import { fetchPostById, fetchAuthorById } from "@/app/actions";
import { Suspense } from "react";
import Link from "next/link";

//dynamic metadata

export default async function Post({ params }: { params: { postId: string } }) {
  const post = (await fetchPostById({ id: Number(params.postId) })) || null;
  if (!post) {
    return (
      <main className="w-full md:w-[99%] bg-orange-300 rounded-3xl md:h-[80vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-semibold">Post not found</h2>
        <Link
          href="/publicPage/blog"
          className="border rounded-3xl border-green-500 px-3 py-2 mt-8 text-lg font-semibold bg-green-500 hover:bg-green-600 text-white"
        >
          Go back to browsing posts
        </Link>
      </main>
    );
  }
  const author = await fetchAuthorById({ id: Number(post?.authorId) });

  const formatedDate = post?.createdAt
    ? new Date(post.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unknown Date";

  return (
    <main className="w-full md:w-[99%] bg-orange-300 rounded-3xl md:h-[80vh] flex flex-col items-center">
      <Suspense fallback="Loading post data...">
        <div className="w-full md:w-[99%] bg-orange-300 rounded-3xl md:h-[75vh] flex flex-col items-center h-[130vh]">
          <h1 className="text-3xl font-bold pt-3">{post?.title}</h1>
          <p className="text-lg pt-3">{post?.content}</p>
        </div>
        <div>
          <p className="text-slate-400 text-md">
            Written on {formatedDate} by {author?.userName}
          </p>
        </div>
      </Suspense>
    </main>
  );
}
