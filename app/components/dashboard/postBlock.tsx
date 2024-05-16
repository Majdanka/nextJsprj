import { fetchPostById } from "@/app/actions";
import Link from "next/link";

export default async function PostBlock(postId: { postId: number }) {
  const post = await fetchPostById({ id: postId.postId });
  return (
    <>
      <div
        key={post?.id}
        className="w-[98%] border rounded-3xl my-1 py-2 text-gray-700 border-gray-700 pl-2 bg-slate-200 hover:bg-slate-300 cursor-pointer flex font-[500]"
      >
        <div className="w-full">
          <Link href={`/dashboard/posts/${post?.id}`}>
            {"->" + post?.title}
          </Link>
        </div>
        <div className="flex justify-evenly w-[12%] pr-1">
          <Link
            href={`/dashboard/posts/${post?.id}/edit`}
            className="text-yellow-600 hover:text-yellow-900"
          >
            Edit
          </Link>
          <button className="text-red-600 hover:text-red-900">Delete</button>
        </div>
      </div>
    </>
  );
}
