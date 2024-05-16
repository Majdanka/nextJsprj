import { fetchPostById } from "@/app/actions";
import Link from "next/link";
import PostButtons from "./postButtons";

export default async function PostBlock(postId: { postId: number }) {
  const post = await fetchPostById({ id: postId.postId });
  return (
    <>
      <div
        key={post?.id}
        className="w-[98%] border rounded-3xl my-1 items-center py-2 text-gray-700 border-gray-700 pl-2 bg-slate-200 hover:bg-slate-300 cursor-pointer flex font-[500]"
      >
        <div className="w-full">
          <Link href={`/dashboard/posts/${post?.id}`}>
            {"->" + post?.title}
          </Link>
        </div>
        <PostButtons post={post} />
      </div>
    </>
  );
}
