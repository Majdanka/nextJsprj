"use client";

import Link from "next/link";

export default function MobileAside() {
  return (
    <nav className="w-full flex justify-center items-center flex-col md:hidden">
      <h1 className="mt-[17vh] w-[98%] border border-green-400 rounded-3xl flex justify-center items-center py-2 text-3xl font-semibold bg-green-400 text-white">
        Dashboard
      </h1>
      <aside className="flex rounded-3xl bg-green-400 w-[98%] flex-col items-center justify-center mb-1">
        <button
          className="w-full flex flex-col justify-center items-center text-xl font-semibold py-2"
          onClick={() => {
            document.querySelector("aside > div")?.classList.toggle("hidden");
            document.querySelector("aside > div")?.classList.toggle("flex");
            document
              .querySelector("button > p:first-of-type")
              ?.classList.toggle("block");
            document
              .querySelector("button > p:first-of-type")
              ?.classList.toggle("hidden");
            document
              .querySelector("button > p:last-of-type")
              ?.classList.toggle("block");
            document
              .querySelector("button > p:last-of-type")
              ?.classList.toggle("hidden");
            document.querySelector("nav > h1")?.classList.toggle("mt-[27vh]");
            document.querySelector("nav > h1")?.classList.toggle("mt-[17vh]");
          }}
        >
          <p className="block">Show more</p>
          <p className="hidden">Show less</p>
        </button>
        <div className="hidden flex-col w-full justify-center items-center">
          <Link href="/dashboard" className="w-[98%]">
            <div className="w-full flex items-center py-2 border border-green-200 rounded-3xl text-lg hover:bg-green-300 pl-1 my-3">
              {"->"}General
            </div>
          </Link>
          <Link href="/dashboard/posts" className="w-[98%]">
            <div className="w-full flex items-center py-2 border border-green-200 rounded-3xl text-lg hover:bg-green-300 pl-1 my-3">
              {"->"}Posts
            </div>
          </Link>
          <Link href="/dashboard/users" className="w-[98%]">
            <div className="w-full flex items-center py-2 border border-green-200 rounded-3xl text-lg hover:bg-green-300 pl-1 my-3">
              {"->"}Users
            </div>
          </Link>
        </div>
      </aside>
    </nav>
  );
}
