import { deleteUser } from "@/app/actions";

export default function DeleteUserButton({ userId }: { userId: number }) {
  return (
    <form action={deleteUser}>
      <input type="hidden" value={userId} name="userId" />
      <button
        className="rounded-3xl border border-red-500 p-3 bg-red-300 font-semibold hover:bg-red-400"
        type="submit"
      >
        Delete this user
      </button>
    </form>
  );
}
