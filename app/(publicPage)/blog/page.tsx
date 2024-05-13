import { Metadata } from "next";
import BlogOperator from "@/app/components/blogPage/blogOperator";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Blog({
  searchParams,
}: {
  searchParams?: { search?: string; page?: number };
}) {
  return (
    <main className="w-full md:w-[99%] bg-orange-300 rounded-3xl md:h-[80vh] flex flex-col items-center h-[130vh]">
      <BlogOperator searchParams={searchParams} />
    </main>
  );
}
