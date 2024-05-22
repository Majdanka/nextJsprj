import Link from "next/link";

export default function AddUserButton() {
  return (
    <Link
      href={`/dashboard/users/add`}
      className="w-full border rounded-3xl my-1 py-1 text-gray-700 hover:text-green-900 border-gray-700 pl-2 bg-green-200 hover:bg-green-300 cursor-pointer flex font-[500] items-center justify-center"
    >
      (+) Add new user
    </Link>
  );
}
