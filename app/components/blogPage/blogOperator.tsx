"use client";

import BlogBlock from "./blogBlock";
import PageChanger from "./pageChanger";
import { useState } from "react";
import { fetchPostsPages, fetchPotsByPage } from "@/app/actions";
import { generatePagination } from "@/app/utils";

export default async function BlogOperator() {
  const [currentPage, setPage] = useState(1);
  const totalPages = await fetchPostsPages();
  const allPage = generatePagination(currentPage, totalPages);
  const posts = await fetchPotsByPage({ page: currentPage });

  function handlePreviousPage() {
    if (currentPage > 1) {
      setPage((c) => c - 1);
    }
  }

  function handleNextPage() {
    if (currentPage < totalPages) {
      setPage((c) => c + 1);
    }
  }

  return (
    <>
      <p>{currentPage}</p>
      <button onClick={handlePreviousPage}>-</button>
      <button onClick={handleNextPage}>+</button>
    </>
  );
}
