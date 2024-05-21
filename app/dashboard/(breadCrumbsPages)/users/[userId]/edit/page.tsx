import { cookies } from "next/headers";
import { fetchAuthorById } from "@/app/actions";
import Link from "next/link";

export default async function UsersEdit({
  params,
}: {
  params: { userId: string };
}) {
  const store = cookies();
  const username = store.get("userName")?.value;
  const author = await fetchAuthorById({ id: Number(params.userId) });

  if (username !== author?.userName) {
    return (
      <>
        <h1 className="">Unauthorized</h1>
        <Link href={`/dashboard/users/${params.userId}`}>
          Check the user overview
        </Link>
        <Link href="/dashboard/users">Go back to browsing users</Link>
      </>
    );
  } else {
    return <h1>Authorized</h1>;
  }
}
