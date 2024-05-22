import { fetchAuthorById, fetchAuthorsPostsCount } from "@/app/actions";

export default async function SpecUserOverview({ id }: { id: number }) {
  const author = await fetchAuthorById({ id });
  const postsCount = await fetchAuthorsPostsCount(id);
  return (
    <>
      <h2>Author name: {author?.userName}</h2>
      <h3>Posts count: {postsCount}</h3>
    </>
  );
}
