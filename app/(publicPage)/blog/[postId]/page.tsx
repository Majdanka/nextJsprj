import { Metadata, ResolvingMetadata } from "next";
import { fetchPostById, fetchAuthorById } from "@/app/actions";
import { Suspense } from "react";

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
