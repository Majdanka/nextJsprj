"use client";

import Link from "next/link";

export default function NavBarMobile() {
  return (
    <>
      <button
        className="w-full flex flex-col justify-center items-center text-2xl font-bold"
        onClick={() => {
          document.querySelector("nav > div")?.classList.toggle("hidden");
          document.querySelector("nav > div")?.classList.toggle("flex");
        }}
      >
        ≡
      </button>
      <div className="hidden flex-col w-full justify-center items-center">
        <div className="w-full hover:text-blue-500 flex justify-center items-center">
          <Link href="/">Home</Link>
        </div>
        <div className="w-full hover:text-blue-500 flex justify-center items-center">
          <Link href="/gallery">Gallery</Link>
        </div>
        <div className="w-full hover:text-blue-500 flex justify-center items-center">
          <Link href="/blog">Blog</Link>
        </div>
        <div className="w-full hover:text-blue-500 flex justify-center items-center">
          <Link href="/about">About</Link>
        </div>
        <div className="w-full hover:text-blue-500 flex justify-center items-center">
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </>
  );
}
