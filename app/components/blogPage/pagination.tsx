"use client";

import clsx from "clsx";
import { Span } from "next/dist/trace";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

export default async function Pagination({
  pages,
  current,
}: {
  pages: number;
  current: number;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const url = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    return `${pathname}?${params.toString()}`;
  };

  noStore();

  const Pagination = [];
  if (pages <= 7) {
    for (let i = 1; i <= pages; i++) {
      Pagination.push(
        <Link
          href={url(i)}
          className={clsx(
            "px-3 py-1 border border-gray-200 rounded-md text-sm",
            {
              "bg-gray-200": i === current,
            }
          )}
        >
          {i}
        </Link>
      );
    }
  } else {
    for (let i = 1; i <= 2; i++) {
      Pagination.push(
        <Link
          href={url(i)}
          className={clsx(
            "px-3 py-1 border border-gray-200 rounded-md text-sm",
            {
              "bg-gray-200": i === current,
            }
          )}
        >
          {i}
        </Link>
      );
    }
    if (current > pages / 2) {
      if (current - 2 > 2)
        Pagination.push(<div className="ml-1 mr-1 pt-2">...</div>);

      if (current - 1 < pages - 1) {
        Pagination.push(
          <Link
            href={url(current - 1)}
            className="px-3 py-1 border border-gray-200 rounded-md text-sm"
          >
            {current - 1}
          </Link>
        );
      }
      if (current < pages - 1) {
        Pagination.push(
          <Link
            href={url(current)}
            className="px-3 py-1 border border-gray-200 rounded-md text-sm bg-gray-200"
          >
            {current}
          </Link>
        );
      }
      if (current + 1 < pages - 1) {
        Pagination.push(
          <Link
            href={url(current + 1)}
            className="px-3 py-1 border border-gray-200 rounded-md text-sm"
          >
            {current + 1}
          </Link>
        );
        if (current + 2 < pages - 1)
          Pagination.push(<div className="ml-1 mr-1 pt-2">...</div>);
      }
    } else {
      if (current - 2 > 2)
        Pagination.push(<div className="ml-1 mr-1 pt-2">...</div>);
      if (current - 1 > 2) {
        Pagination.push(
          <Link
            href={url(current - 1)}
            className="px-3 py-1 border border-gray-200 rounded-md text-sm"
          >
            {current - 1}
          </Link>
        );
      }
      if (current > 2) {
        Pagination.push(
          <Link
            href={url(current)}
            className="px-3 py-1 border border-gray-200 rounded-md text-sm bg-gray-200"
          >
            {current}
          </Link>
        );
      }
      if (current + 1 > 2) {
        Pagination.push(
          <Link
            href={url(current + 1)}
            className="px-3 py-1 border border-gray-200 rounded-md text-sm"
          >
            {current + 1}
          </Link>
        );
      }
      if (current + 2 < pages - 1)
        Pagination.push(<div className="ml-1 mr-1 pt-2">...</div>);
    }
    for (let i = pages - 1; i <= pages; i++) {
      Pagination.push(
        <Link
          href={url(i)}
          className={clsx(
            "px-3 py-1 border border-gray-200 rounded-md text-sm",
            {
              "bg-gray-200": i === current,
            }
          )}
        >
          {i}
        </Link>
      );
    }
  }

  return (
    <div className="w-full flex items-center justify-center h-[30vh]">
      {Pagination}
    </div>
  );
}
