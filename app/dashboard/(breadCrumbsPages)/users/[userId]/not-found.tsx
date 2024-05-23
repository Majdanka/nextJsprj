import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full flex items-center justify-center h-[80vh] flex-col">
      <h1 className="text-3xl font-semibold">This user does not exist</h1>
      <Link
        href="/dashboard/users"
        className="border border-green-500 rounded-3xl p-3 bg-green-300 font-semibold hover:bg-green-400 mt-10"
      >
        Go back to browsing users
      </Link>
    </div>
  );
}
