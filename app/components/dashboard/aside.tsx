import Link from "next/link";
import LogoutButton from "./logoutButton";

export default async function Aside() {
  return (
    <aside className="w-1/5  h-[98vh] bg-green-400 rounded-3xl hidden md:flex flex-col pt-2 text-white">
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
      <LogoutButton />
    </aside>
  );
}
