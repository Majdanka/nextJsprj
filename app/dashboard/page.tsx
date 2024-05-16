import LastPostsDash from "../components/dashboard/lastPostsDash";
import AddPostButton from "../components/dashboard/addPostButton";
import UsersOverview from "../components/dashboard/usersOverview";
import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <fieldset className="mt-2 w-[98%] border border-gray-700 rounded-3xl bg-slate-300 h-[60vh] flex-col flex items-center">
        <legend className="ml-2 text-gray-700 font-bold text-[1.2rem]">
          Latest posts
        </legend>
        <div className="mt-2 w-full flex-col flex items-center">
          <AddPostButton />
          <LastPostsDash />
          <Link
            href={`/dashboard/posts/`}
            className="w-[96%] border rounded-3xl my-1 py-2 text-gray-700 hover:text-blue-900 border-gray-700 pl-2 bg-blue-200 hover:bg-blue-300 cursor-pointer flex font-[500] items-center justify-center"
          >
            <div>{"->" + "View all posts" + "<-"}</div>
          </Link>
        </div>
      </fieldset>
      <fieldset className="mt-2 w-[98%] border border-gray-700 rounded-3xl bg-slate-300 h-[34vh] flex-col flex items-center">
        <legend className="ml-2 text-gray-700 font-bold text-[1.2rem]">
          Users
        </legend>
        <div className="pl-2 mt-2 w-full flex flex-wrap justify-evenly">
          <UsersOverview />
        </div>
      </fieldset>
    </>
  );
}
