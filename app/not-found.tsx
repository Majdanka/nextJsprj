import Link from "next/link";
import { cookies } from "next/headers";

export default function NotFound() {
  const userName = cookies().get("userName")?.value
    ? cookies().get("userName")?.value
    : null;
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold">
        Sorry, this subpage does not exist
      </h1>
      <Link
        href="/"
        className="border border-green-500 rounded-3xl p-3 bg-green-300 font-semibold hover:bg-green-400 mt-10"
      >
        Go back to main page
      </Link>
      {userName && (
        <Link
          href="/dashboard"
          className="border border-green-500 rounded-3xl p-3 bg-green-300 font-semibold hover:bg-green-400 mt-10"
        >
          Go back to dashboard
        </Link>
      )}
    </div>
  );
}
