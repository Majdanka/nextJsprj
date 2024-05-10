"use client";

import BlogBlock from "./blogBlock";
import PageChanger from "./pageChanger";
import { useState } from "react";
import { fetchPostsPages, fetchPotsByPage } from "@/app/actions";

export default async function BlogOperator() {
  const [currentPage, setPage] = useState(2);
  const totalPages = fetchPostsPages();
  const posts = await fetchPotsByPage({ page: currentPage });
  return (
    <>
      <p>{currentPage}</p>
      <p>{totalPages}</p>
      {posts.map((post) => (
        <a href={`/blog/${post.id}`} key={post.id} className="w-[95%]">
          <div className="border-2 border-black text-2xl rounded-xl hover:bg-black hover:text-white w-full flex justify-center items-center mt-3">
            {post.title}
          </div>
        </a>
      ))}
    </>
  );
}
