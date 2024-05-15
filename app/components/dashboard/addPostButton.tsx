import Link from "next/link";

export default function AddPostButton() {
  return (
    <div className="w-[96%] border rounded-3xl my-1 py-2 text-gray-700 hover:text-green-900 border-gray-700 pl-2 bg-green-200 hover:bg-green-300 cursor-pointer flex font-[500] items-center justify-center">
      <Link href={`/dashboard/posts/add`}> (+) Add new post</Link>
    </div>
  );
}
