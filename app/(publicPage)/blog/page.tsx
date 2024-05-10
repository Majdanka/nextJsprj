import { Metadata } from "next";
import BlogOperator from "@/app/components/blogPage/blogOperator";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Blog() {
  return (
    <main className="w-full md:w-[99%] bg-orange-300 rounded-3xl md:h-[80vh] flex flex-col items-center h-[130vh]">
      <BlogOperator />
    </main>
  );
}
