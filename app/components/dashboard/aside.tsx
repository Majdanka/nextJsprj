import Link from "next/link";

export default function Aside() {
  return (
    <aside className="w-1/5  h-[98vh] bg-green-400 rounded-3xl flex flex-col pt-2 text-white">
      <h1 className="text-xl font-bold pl-2">Personal-Site Dashboard</h1>
      <nav className="w-full flex flex-col mt-2">
        <Link href="/dashboard">
          <div className="w-[98%] flex items-center py-2 border border-green-200 rounded-3xl text-lg hover:bg-green-300 pl-1 my-1">
            {"->"}General
          </div>
        </Link>
        <Link href="/dashboard/posts">
          <div className="w-[98%] flex items-center py-2 border border-green-200 rounded-3xl text-lg hover:bg-green-300 pl-1 my-1">
            {"->"}Posts
          </div>
        </Link>
        <Link href="/dashboard/users">
          <div className="w-[98%] flex items-center py-2 border border-green-200 rounded-3xl text-lg hover:bg-green-300 pl-1 my-1">
            {"->"}Users
          </div>
        </Link>
      </nav>
      <div className=" h-[68vh] flex justify-center items-end">
        <div className="flex py-2 border border-red-400 rounded-3xl w-[98%] items-center justify-center text-red-400 hover:bg-red-300 hover:text-red-500 cursor-pointer">
          Log out
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
      </div>
    </aside>
  );
}
