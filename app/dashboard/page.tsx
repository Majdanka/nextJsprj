import LastPostsDash from "../components/dashboard/lastPostsDash";
import AddPostButton from "../components/dashboard/addPostButton";
import UsersOverview from "../components/dashboard/usersOverview";

export default function Dashboard() {
  return (
    <>
      <div className="ml-3 mt-1 w-full h-[1.4rem]">
        <h1 className="text-gray-800 font-bold text-[1.35rem]">Overview</h1>
      </div>
      <fieldset className="mt-2 w-[98%] border border-gray-700 rounded-3xl bg-slate-300 h-[48vh] flex-col flex items-center">
        <legend className="ml-2 text-gray-700 font-bold text-[1.2rem]">
          Latest posts
        </legend>
        <div className="mt-2 w-full flex-col flex items-center">
          <AddPostButton />
          <LastPostsDash />
        </div>
      </fieldset>
      <fieldset className="mt-2 w-[98%] border border-gray-700 rounded-3xl bg-slate-300 h-[42vh] flex-col flex items-center">
        <legend className="ml-2 text-gray-700 font-bold text-[1.2rem]">
          Users
        </legend>
        <div className="mt-2 w-full flex-col flex items-center">
          <UsersOverview />
        </div>
      </fieldset>
    </>
  );
}
