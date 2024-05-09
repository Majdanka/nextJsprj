import { getPosts } from "@/app/actions";

export default async function Aside() {
  const posts: { id: number; userName: string; password: string }[] =
    await getPosts();

  return (
    <>
      <h1 className="text-2xl">Recent posts: </h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/blog/${post.id}`}>{post.userName}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
