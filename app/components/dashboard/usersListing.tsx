import Pagination from "@/app/components/blogPage/pagination";
import Search from "../blogPage/search";
import {
  fetchAuthorsForPage,
  fetchAuthorsPostsCount,
  fetchCurrentUser,
} from "@/app/actions";
import clsx from "clsx";
import Link from "next/link";
import AddUserButton from "./addUserButton";
import { cookies } from "next/headers";

export default async function UsersList({
  currentAuthor,
  totalPages,
  searchParams,
}: {
  currentAuthor: { id: number; userName: string; password: string } | null;
  totalPages: number;
  searchParams?: { search?: string; page?: number };
}) {
  const currentPage = searchParams?.page ? searchParams.page : 1;
  const take = 10;
  const term = searchParams?.search ? searchParams.search : "";
  const authors = await fetchAuthorsForPage({
    term,
    page: currentPage,
    take,
  });
  const userName = cookies().get("userName")?.value;
  if (userName) {
    const currentUser = await fetchCurrentUser({ userName });

    return (
      <>
        <Search placeholder="Search users..." />
        {currentUser && currentUser.id == 1 && (
          <div className="w-[98%] mt-1">
            <AddUserButton />
          </div>
        )}
        {authors.map(async (author) => (
          <Link
            href={clsx(
              currentAuthor?.id === author.id
                ? `/dashboard/users/${author.id}/edit`
                : `/dashboard/users/${author.id}`
            )}
            key={author.id}
            className={clsx(
              "w-[98%] border rounded-3xl my-1 mt-2 py-3 cursor-pointer flex flex-col font-[500]",
              {
                "text-green-700 border-green-700 pl-2 bg-green-200 hover:bg-green-300":
                  author.id === currentAuthor?.id,
                "text-gray-700 border-gray-700 pl-2 bg-slate-200 hover:bg-slate-300":
                  author.id !== currentAuthor?.id,
              }
            )}
          >
            <div className="w-full flex py-1 justify-center items-center">
              <div className="w-1/2 px-5 flex">
                {"Author name: " + author.userName}
              </div>
              <div className="w-1/2 px-5 flex justify-end">
                {"Written posts: " + (await fetchAuthorsPostsCount(author.id))}
              </div>
            </div>
          </Link>
        ))}
        {totalPages > 2 && (
          <Pagination current={currentPage} pages={totalPages} />
        )}
      </>
    );
  }
}
