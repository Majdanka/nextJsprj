import SpecUserOverview from "@/app/components/dashboard/specUserOverview";
import { cookies } from "next/headers";
import { fetchAuthorById } from "@/app/actions";
import Link from "next/link";

export default async function Users({
  params,
}: {
  params: { userId: string };
}) {
  const username = cookies().get("userName")?.value;
  const author = await fetchAuthorById({ id: Number(params.userId) });
  return (
    <>
      <div className="h-[80vh] w-full flex items-center justify-evenly flex-col text-3xl font-semibold">
        <SpecUserOverview id={Number(params.userId)} />
      </div>
      {username == author?.userName && (
        <Link
          href={`/dashboard/users/${params.userId}/edit`}
          className="rounded-3xl border border-green-500 p-3 bg-green-300 font-semibold hover:bg-green-400"
        >
          Edit user properties
        </Link>
      )}
    </>
  );
}
