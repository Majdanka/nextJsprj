import { fetchPostById } from "@/app/actions";
import Link from "next/link";

export default async function BlogBlock(postId: { postId: number }) {
  const post = await fetchPostById({ id: postId.postId });

  return (
    <>
      <Link
        href={`/blog/${post?.id}`}
        className="text-sm md:text-xl font-bold hover:bg-black hover:text-white bg-white rounded-3xl flex justify-center items-center"
      >
        <div className="md:p-5 py-3 flex h-fit justify-center items-center">
          {post?.title}
        </div>
      </Link>
    </>
  );
}
