import { Metadata } from "next";
import PostsOperator from "@/app/components/dashboard/postsOperator";

export default function Posts({
  searchParams,
}: {
  searchParams?: { search?: string; page?: number };
}) {
  return (
    <>
      <PostsOperator searchParams={searchParams} />
    </>
  );
}
