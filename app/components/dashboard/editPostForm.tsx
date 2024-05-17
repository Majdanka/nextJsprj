import { editPost } from "@/app/actions";

export default function EditPostForm({
  post,
}: {
  post: {
    id: number;
    createdAt: Date;
    title: string;
    content: string | null;
    authorId: number;
  } | null;
}) {
  return (
    <fieldset className="border border-black rounded-3xl w-[98%] flex flex-col justify-center items-center h-[91.5vh]">
      <legend className="ml-1">Editing post {post?.id}</legend>
      <form action={editPost} className="w-2/3 flex flex-col">
        <input type="hidden" name="postId" value={post?.id} />
        <input
          defaultValue={post?.title}
          required
          name="title"
          type="text"
          placeholder="Title"
          className="rounded-xl my-2 border-2 border-slate-400 bg-slate-300 placeholder:text-slate-500 pl-1 focus:border-green-600 focus:outline-none"
        />
        <textarea
          defaultValue={post?.content ? post.content : ""}
          required
          name="content"
          placeholder="Content"
          className="min-h-[72vh] rounded-xl my-1 border-2 border-slate-400 placeholder:text-slate-500 pl-1 bg-slate-300 focus:border-green-600 focus:outline-none resize-none"
        />
        <button
          type="submit"
          className="border-2 py-2 my-1 bg-green-200 hover:bg-green-300 font-[500] hover:text-green-900 border-green-400 rounded-3xl"
        >
          Edit post
        </button>
      </form>
    </fieldset>
  );
}
