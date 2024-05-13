import { fetchPostById } from "@/app/actions";
import Link from "next/link";

export default async function BlogBlock(postId: { postId: number }) {
  const post = await fetchPostById({ id: postId.postId });

  return (
    <>
      <div className="p-4 bg-white shadow rounded-md">
        <Link href={`/blog/${post?.id}`} className="text-xl font-bold">
          {post?.title}
        </Link>
      </div>
    </>
  );
}
