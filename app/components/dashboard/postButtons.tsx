"use client";

import Link from "next/link";
import { deletePostWithId } from "@/app/actions";
import { useRouter } from "next/navigation";

export default function PostButtons({
  href,
  post,
}: {
  href: string;
  post: {
    id: number;
    createdAt: Date;
    title: string;
    content: string | null;
    authorId: number;
  } | null;
}) {
  const { replace } = useRouter();

  async function deletePost() {
    deletePostWithId({ id: post?.id });
    replace(href);
  }

  return (
    <div className="w-44 flex justify-evenly items-center pb-3 md:pb-0">
      <Link
        href={"/dashboard/posts/" + post?.id + "/edit"}
        className="border border-black rounded-3xl py-1 px-3 hover:bg-slate-300 font-[500]"
      >
        Edit
      </Link>
      <button
        onClick={deletePost}
        className="border border-red-600 text-red-600 rounded-3xl py-1 px-3 hover:bg-slate-300 font-[500]"
      >
        Delete
      </button>
    </div>
  );
}
