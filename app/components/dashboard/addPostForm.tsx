import { addPostDb } from "@/app/actions";

export default function AddPostForm() {
  async function addPost(formData: FormData) {
    "use server";
    const title = formData.get("title");
    const content = formData.get("content");

    if (title && content) {
      const { authorId } = { authorId: 1 };
      await addPostDb({
        title: title.toString(),
        content: content.toString(),
        authorId,
      });
      console.log("Post added");
    }
  }

  return (
    <fieldset className="border border-black rounded-3xl w-[98%] flex flex-col justify-center items-center h-[91.5vh]">
      <legend className="ml-1">Add post data</legend>
      <form action={addPost} className="w-2/3 flex flex-col">
        <input
          type="text"
          placeholder="Title"
          className="rounded-xl my-2 border-2 border-slate-400 bg-slate-300 placeholder:text-slate-500 pl-1 focus:border-green-600 focus:outline-none"
        />
        <textarea
          placeholder="Content"
          className="min-h-[72vh] rounded-xl my-1 border-2 border-slate-400 placeholder:text-slate-500 pl-1 bg-slate-300 focus:border-green-600 focus:outline-none resize-none"
        />
        <input
          type="submit"
          value="Add post"
          className="border-2 py-2 my-1 bg-green-200 hover:bg-green-300 font-[500] hover:text-green-900 border-green-400 rounded-3xl"
        />
      </form>
    </fieldset>
  );
}
