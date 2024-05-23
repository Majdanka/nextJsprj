import { cookies } from "next/headers";
import { fetchAuthorById } from "@/app/actions";
import Link from "next/link";
import UserFormEdit from "@/app/components/dashboard/userFormEdit";
import SpecUserOverview from "@/app/components/dashboard/specUserOverview";
import { notFound } from "next/navigation";

export default async function UsersEdit({
  params,
}: {
  params: { userId: string };
}) {
  const store = cookies();
  const username = store.get("userName")?.value;
  const author = await fetchAuthorById({ id: Number(params.userId) });
  if (!author) {
    return notFound();
  }
  if (username !== author?.userName) {
    return (
      <div className="h-screen w-full flex items-center justify-center flex-col">
        <h1 className="text-3xl font-bold">Unauthorized</h1>
        <Link
          href={`/dashboard/users/${params.userId}`}
          className="rounded-3xl border w-64 flex justify-center items-center border-black px-1 py-2 m-2 bg-green-100 hover:bg-green-200 font-[500]"
        >
          {"->"}Check the user overview
        </Link>
        <Link
          href="/dashboard/users"
          className="rounded-3xl border w-64 flex justify-center items-center border-black px-1 py-2 m-2 bg-green-100 hover:bg-green-200 font-[500]"
        >
          {"->"}Go back to browsing users
        </Link>
      </div>
    );
  } else {
    return (
      <div className="w-full h-screen flex">
        <div className="w-1/2 m-0 p-0 h-[90vh] flex justify-center items-center flex-col text-3xl font-semibold rounded-3xl border">
          <SpecUserOverview id={Number(params.userId)} />
        </div>
        <div className="w-1/2 m-0 p-0 h-[90vh] flex">
          <UserFormEdit author={author} />
        </div>
      </div>
    );
  }
}
