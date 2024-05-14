import Link from "next/link";

export default function Aside() {
  return (
    <aside className="w-1/5  h-[95vh] bg-blue-300 rounded-3xl">
      <nav>
        <Link href="/dashboard">General</Link>
        <Link href="/dashboard/posts">Posts</Link>
        <Link href="/dashboard/users">Users</Link>
      </nav>
    </aside>
  );
}
