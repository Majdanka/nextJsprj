import BlogBlock from "./blogBlock";
import Pagination from "./pagination";
import Search from "./search";
import { fetchPostsPages, fetchPosts } from "@/app/actions";

export default async function BlogOperator({
  searchParams,
}: {
  searchParams?: { search?: string; page?: number };
}) {
  const term = searchParams?.search || "";
  const page = searchParams?.page || 1;
  const totalPages = await fetchPostsPages();
  const posts = await fetchPosts({ title: term, page: Number(page) });

  return (
    <>
      <Search placeholder="Search posts..." />
      <div className="grid grid-cols-5 gap-3 pt-3">
        {posts.map((post) => (
          <BlogBlock postId={post.id} key={post.id} />
        ))}
      </div>
      <Pagination />
    </>
  );
}
