import {
  fetchAuthors,
  fetchAuthorsPostsCount,
  fetchCurrentUser,
} from "@/app/actions";
import Link from "next/link";
import { cookies } from "next/headers";
import AddUserButton from "./addUserButton";

export default async function UsersOverview() {
  const store = cookies();
  const userName = store.get("userName")?.value;
  const authors = await fetchAuthors({ userName: userName ? userName : "" });
  const currentUser = await fetchCurrentUser({
    userName: userName ? userName : "",
  });

  const map = [];

  if (currentUser) {
    const count = await fetchAuthorsPostsCount(currentUser.id);
    map.push(
      <Link
        href={`/dashboard/users/${currentUser.id}`}
        key={currentUser.id}
        className="w-full md:w-[46%] border rounded-3xl my-1 py-3 text-green-700 border-green-700 pl-2 bg-green-200 hover:bg-green-300 cursor-pointer flex flex-col font-[500]"
      >
        <div className="w-full flex flex-col justify-center items-center">
          {"Author name: " + currentUser.userName}
          <br></br> {"Written posts: " + count}
        </div>
      </Link>
    );
  }

  if (authors.length > 3) {
    for (let i = 0; i < 2; i++) {
      const author = authors[0];
      const count = await fetchAuthorsPostsCount(author.id);
      map.push(
        <Link
          href={`/dashboard/users/${author.id}`}
          key={author.id}
          className="w-full md:w-[46%] border rounded-3xl my-1 py-3 text-gray-700 border-gray-700 pl-2 bg-slate-200 hover:bg-slate-300 cursor-pointer flex flex-col font-[500]"
        >
          <div className="w-full flex flex-col justify-center items-center">
            {"Author name: " + author.userName}
            <br></br> {"Written posts: " + count}
          </div>
        </Link>
      );
    }
    map.push(
      <Link
        href={`/dashboard/users/`}
        className="w-full md:w-[46%] border rounded-3xl my-1 py-3 text-gray-700 border-gray-700 pl-2 bg-blue-200 hover:bg-blue-300 hover:text-blue-900 cursor-pointer flex flex-col justify-center items-center font-[500]"
      >
        {"->"}See all users {"<-"}
      </Link>
    );
  } else {
    for (let i = 0; i < authors.length; i++) {
      const author = authors[i];
      const count = await fetchAuthorsPostsCount(author.id);
      map.push(
        <Link
          href={`/dashboard/users/${author.id}`}
          key={author.id}
          className="w-full md:w-[46%] border rounded-3xl my-1 py-3 text-gray-700 border-gray-700 pl-2 bg-slate-200 hover:bg-slate-300 cursor-pointer flex flex-col font-[500]"
        >
          <div className="w-full flex flex-col justify-center items-center">
            {"Author name: " + author.userName}
            <br></br> {"Written posts: " + count}
          </div>
        </Link>
      );
    }
  }

  return (
    <>
      {currentUser && currentUser.id == 1 && (
        <div className="w-[95%]">
          <AddUserButton />
        </div>
      )}
      {map}
    </>
  );
}
