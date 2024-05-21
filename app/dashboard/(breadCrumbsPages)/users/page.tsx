import { cookies } from "next/headers";
import UsersList from "@/app/components/dashboard/usersListing";
import { Suspense } from "react";
import { fetchCurrentUser, fetchAuthorPages } from "@/app/actions";

export default async function Users({
  searchParams,
}: {
  searchParams?: { search?: string; page?: number };
}) {
  const store = cookies();
  const currentUser = store.get("userName")?.value;
  const currentAuthor = await fetchCurrentUser({
    userName: currentUser ? currentUser : "",
  });
  const totalPages = await fetchAuthorPages(10);

  return (
    <Suspense fallback="Loading users...">
      <UsersList
        currentAuthor={currentAuthor ? currentAuthor : null}
        totalPages={totalPages}
        searchParams={searchParams}
      ></UsersList>
    </Suspense>
  );
}
