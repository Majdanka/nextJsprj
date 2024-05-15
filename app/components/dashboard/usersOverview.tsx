import { fetchAuthors, fetchAuthorsPostsCount } from "@/app/actions";

export default async function UsersOverview() {
  const authors = await fetchAuthors();

  const map = [];

  if (authors.length > 0) {
    for (let i = 0; i < 5; i++) {
      const author = authors[0];
      const count = await fetchAuthorsPostsCount(author.id);
      map.push(
        <div
          key={author.id}
          className="w-[48%] border rounded-3xl my-1 py-2 text-gray-700 border-gray-700 pl-2 bg-slate-200 hover:bg-slate-300 cursor-pointer flex font-[500]"
        >
          <div className="w-[88%]">
            {"->" + author.userName + " (" + count + ")"}
          </div>
        </div>
      );
    }
  } else {
    for (let i = 0; i < authors.length - 1; i++) {
      const author = authors[i];
      const count = await fetchAuthorsPostsCount(author.id);
      map.push(
        <div
          key={author.id}
          className="w-[96%] border rounded-3xl my-1 py-2 text-gray-700 border-gray-700 pl-2 bg-slate-200 hover:bg-slate-300 cursor-pointer flex font-[500]"
        >
          <div className="w-[88%]">
            {"->" + author.userName + " (" + count + ")"}
          </div>
        </div>
      );
    }
  }

  return <>{map}</>;
}
