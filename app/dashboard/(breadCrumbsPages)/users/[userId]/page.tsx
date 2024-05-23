import SpecUserOverview from "@/app/components/dashboard/specUserOverview";
import { cookies } from "next/headers";
import { fetchAuthorById, fetchCurrentUser } from "@/app/actions";
import Link from "next/link";
import DeleteUserButton from "@/app/components/dashboard/deleteUserButton";
import { notFound } from "next/navigation";

export default async function Users({
  params,
}: {
  params: { userId: string };
}) {
  const username = cookies().get("userName")?.value;
  const author = await fetchAuthorById({ id: Number(params.userId) });
  let current = null;
  if (username) {
    current = await fetchCurrentUser({ userName: username });
  }
  if (!author) {
    return notFound();
  }
  return (
    <>
      <div className="h-[80vh] w-full flex items-center justify-evenly flex-col text-3xl font-semibold">
        <SpecUserOverview id={Number(params.userId)} />
      </div>
      <div className="w-1/2 flex items-center justify-center">
        {username == author?.userName && (
          <Link
            href={`/dashboard/users/${params.userId}/edit`}
            className="rounded-3xl border border-green-500 p-3 bg-green-300 font-semibold hover:bg-green-400"
          >
            Edit user properties
          </Link>
        )}
        {current && current?.id == 1 && current?.id != author?.id && (
          <DeleteUserButton userId={Number(params.userId)} />
        )}
      </div>
    </>
  );
}
