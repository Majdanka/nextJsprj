import { fetchRecentPosts, deletePostWithId } from "@/app/actions";
import Link from "next/link";
import PostButtons from "./postButtons";

export default async function LastPostsDash() {
  const posts = await fetchRecentPosts({ take: 4 });

  return (
    <>
      {posts.map((post) => (
        <div
          key={post.id}
          className="w-[96%] border rounded-3xl my-1 py-2 text-gray-700 border-gray-700 pl-2 bg-slate-200 flex items-center font-[500]"
        >
          <div className="w-[88%]">
            <Link href={`/dashboard/posts/${post.id}`}>
              {"->" + post.title}
            </Link>
          </div>
          <PostButtons post={post} href="/dashboard" />
        </div>
      ))}
    </>
  );
}
