import EditPostForm from "@/app/components/dashboard/editPostForm";
import { Suspense } from "react";
import { fetchPostById } from "@/app/actions";

export default async function EditPost({
  params,
}: {
  params: { postId: string };
}) {
  const post = await fetchPostById({ id: Number(params.postId) });

  return (
    <Suspense fallback="Loading edit form....">
      <EditPostForm post={post} />
    </Suspense>
  );
}
