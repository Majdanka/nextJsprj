"use client";

import Link from "next/link";

export default function MobileAside() {
  return (
    <aside className="md:hidden flex rounded-3xl bg-green-400 w-[90%] flex-col items-center justify-center">
      <button
        className="w-full flex flex-col justify-center items-center text-xl font-semibold py-2"
        onClick={() => {
          document.querySelector("aside > div")?.classList.toggle("hidden");
          document.querySelector("nav > div")?.classList.toggle("flex");
          document
            .querySelector("button > p:first-of-type")
            ?.classList.toggle("flex");
          document
            .querySelector("button > p:first-of-type")
            ?.classList.toggle("hidden");
          document
            .querySelector("button > p:last-of-type")
            ?.classList.toggle("flex");
          document
            .querySelector("button > p:last-of-type")
            ?.classList.toggle("hidden");
        }}
      >
        <p>Show more</p>
        <p className="hidden">Show less</p>
      </button>
      <div className="hidden flex-col w-full justify-center items-center">
        <Link href="/dashboard">
          <div className="w-full flex items-center py-2 border border-green-200 rounded-3xl text-lg hover:bg-green-300 pl-1 my-3">
            {"->"}General
          </div>
        </Link>
        <Link href="/dashboard/posts">
          <div className="w-full flex items-center py-2 border border-green-200 rounded-3xl text-lg hover:bg-green-300 pl-1 my-3">
            {"->"}Posts
          </div>
        </Link>
        <Link href="/dashboard/users">
          <div className="w-full flex items-center py-2 border border-green-200 rounded-3xl text-lg hover:bg-green-300 pl-1 my-3">
            {"->"}Users
          </div>
        </Link>
      </div>
    </aside>
  );
}
