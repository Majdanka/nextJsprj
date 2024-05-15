import { fetchAuthors, fetchAuthorsPostsCount } from "@/app/actions";
import Link from "next/link";

export default async function UsersOverview() {
  const authors = await fetchAuthors();

  const map = [];

  if (authors.length > 6) {
    for (let i = 0; i < 5; i++) {
      const author = authors[0];
      const count = await fetchAuthorsPostsCount(author.id);
      map.push(
        <Link
          href={`/dashboard/users/${author.id}`}
          key={author.id}
          className="w-[46%] border rounded-3xl my-1 py-3 text-gray-700 border-gray-700 pl-2 bg-slate-200 hover:bg-slate-300 cursor-pointer flex flex-col font-[500]"
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
        className="w-[46%] border rounded-3xl my-1 py-3 text-gray-700 border-gray-700 pl-2 bg-blue-200 hover:bg-blue-300 hover:text-blue-900 cursor-pointer flex flex-col justify-center items-center font-[500]"
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
          className="w-[46%] border rounded-3xl my-1 py-3 text-gray-700 border-gray-700 pl-2 bg-slate-200 hover:bg-slate-300 cursor-pointer flex flex-col font-[500]"
        >
          <div className="w-full flex flex-col justify-center items-center">
            {"Author name: " + author.userName}
            <br></br> {"Written posts: " + count}
          </div>
        </Link>
      );
    }
  }

  return <>{map}</>;
}
