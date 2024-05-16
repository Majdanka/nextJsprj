import { fetchPostsPages, fetchPosts } from "@/app/actions";
import { Suspense } from "react";
import Search from "../blogPage/search";
import PostBlock from "./postBlock";
import Pagination from "../blogPage/pagination";
import Link from "next/link";

export default async function PostsOperator({
  searchParams,
}: {
  searchParams?: { search?: string; page?: number };
}) {
  const term = searchParams?.search || "";
  const page = Number(searchParams?.page) || 1;
  const totalPages = await fetchPostsPages(term, 8);
  const posts = await fetchPosts({ title: term, page: page, take: 8 });

  return (
    <>
      <Search placeholder="Search posts..." />
      <Link
        href={`/dashboard/posts/add`}
        className="w-[98%] border mt-1 rounded-3xl text-gray-700 hover:text-green-900 border-gray-700 pl-2 bg-green-200 hover:bg-green-300 cursor-pointer flex font-[500] items-center justify-center"
      >
        (+) Add new post
      </Link>
      <Suspense fallback="Loading...">
        <div className="flex flex-col pt-2 items-center w-full">
          {posts.map((post) => (
            <PostBlock postId={post.id} key={post.id} />
          ))}
        </div>
      </Suspense>
      <Suspense>
        <Pagination pages={totalPages} current={page} />
      </Suspense>
    </>
  );
}
