import BlogBlock from "./blogBlock";
import Pagination from "./pagination";
import Search from "./search";
import { fetchPostsPages, fetchPosts } from "@/app/actions";
import { Suspense } from "react";

export default async function BlogOperator({
  searchParams,
}: {
  searchParams?: { search?: string; page?: number };
}) {
  const term = searchParams?.search || "";
  const page = Number(searchParams?.page) || 1;
  const totalPages = await fetchPostsPages(term);
  const posts = await fetchPosts({ title: term, page: page });

  return (
    <>
      <Search placeholder="Search posts..." />
      <Suspense fallback="Loading...">
        <div className="grid grid-cols-5 gap-3 pt-3 w-[98%]">
          {posts.map((post) => (
            <BlogBlock postId={post.id} key={post.id} />
          ))}
        </div>
      </Suspense>
      <Suspense fallback="Loading...">
        <Pagination pages={totalPages} current={page} />
      </Suspense>
    </>
  );
}
