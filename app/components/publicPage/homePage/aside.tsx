import Link from "next/link";
import { fetchRecentPosts } from "@/app/actions";

export default async function Aside() {
  const recentPosts = await fetchRecentPosts({ take: 10 });

  return (
    <>
      {recentPosts.map((post) => (
        <Link href={`/blog/${post.id}`} key={post.id} className="w-[95%]">
          <div className="border-2 border-black text-2xl rounded-xl hover:bg-black hover:text-white w-full flex justify-center items-center mt-3">
            {post.title}
          </div>
        </Link>
      ))}
    </>
  );
}
