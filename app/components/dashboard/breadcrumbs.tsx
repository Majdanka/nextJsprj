"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const crumbs = pathname.split("/").filter(Boolean);
  const map = [];

  if (crumbs.length > 2) {
    map.push(<span className="ml-1 mr-1 text-gray-500">...</span>);
    map.push(<span className="ml-1 mr-1 text-gray-500">{"->"}</span>);
  }
  for (let i = crumbs.length - 2; i < crumbs.length; i++) {
    let crumb = crumbs[i];
    crumb = crumb.slice(0, 1).toUpperCase() + crumb.slice(1);
    const url = "/" + crumbs.slice(0, i + 1).join("/");
    map.push(
      <Link href={url} key={i} className="text-green-500 ml-1 mr-1 underline">
        {crumb}
      </Link>
    );
    if (i < crumbs.length - 1) {
      map.push(<span className="ml-1 mr-1 text-gray-500">{"->"}</span>);
    }
  }

  return (
    <nav className="w-full flex justify-start pl-1 pt-1 text-[1.35rem] font-[500]">
      {map}
    </nav>
  );
}