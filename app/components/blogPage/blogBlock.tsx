import { fetchPostById } from "@/app/actions";
import Link from "next/link";

export default async function BlogBlock(postId: { postId: number }) {
  const post = await fetchPostById({ id: postId.postId });

  return (
    <>
      <Link
        href={`/blog/${post?.id}`}
        className="text-xl font-bold hover:bg-black hover:text-white bg-white rounded-xl"
      >
        <div className="p-5">{post?.title}</div>
      </Link>
    </>
  );
}
