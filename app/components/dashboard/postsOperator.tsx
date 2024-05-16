import { fetchPostsPages, fetchPosts } from "@/app/actions";
import { Suspense } from "react";
import Search from "../blogPage/search";
import PostBlock from "./postBlock";
import Pagination from "../blogPage/pagination";

export default async function PostsOperator({
  searchParams,
}: {
  searchParams?: { search?: string; page?: number };
}) {
  const term = searchParams?.search || "";
  const page = Number(searchParams?.page) || 1;
  const totalPages = await fetchPostsPages(term, 10);
  const posts = await fetchPosts({ title: term, page: page, take: 10 });

  return (
    <>
      <Search placeholder="Search posts..." />
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
