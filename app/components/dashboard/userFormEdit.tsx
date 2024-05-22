import { changeUsername, changePassword } from "@/app/actions";

export default function UserFormEdit({
  author,
}: {
  author: {
    id: number;
    userName: string;
    password: string;
  } | null;
}) {
  return (
    <div className="flex justify-center items-center flex-col w-full text-xl font-semibold">
      <form
        action={changeUsername}
        className="border border-green-500 rounded-3xl p-5 my-3"
      >
        <div className="flex flex-col mb-3">
          <label htmlFor="username" className="text-green-600">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            autoComplete="off"
            required
          />
          <div className="flex flex-col my-3">
            <label htmlFor="password" className="text-green-600">
              Current password
            </label>
            <input
              type="password"
              id="passwordForUsername"
              name="password"
              required
            />
          </div>
        </div>
        <input type="hidden" name="current" id="current" value={author?.id} />
        <button
          type="submit"
          className="border-2 border-green-500 rounded-3xl w-full py-1 bg-green-300 hover:bg-green-400"
        >
          Change username
        </button>
      </form>
      <form
        action={changePassword}
        className="border border-green-500 rounded-3xl p-5 my-3"
      >
        <div className="flex flex-col mb-3">
          <label htmlFor="password" className="text-green-600">
            Current password
          </label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="flex flex-col my-3">
          <label htmlFor="newpassword" className="text-green-600">
            New password
          </label>
          <input type="password" id="newpassword" name="newpassword" required />
        </div>
        <div className="flex flex-col my-3">
          <label htmlFor="reppassword" className="text-green-600">
            Repeat password
          </label>
          <input type="password" id="reppassword" name="reppassword" required />
        </div>
        <input
          type="hidden"
          name="current"
          id="currentForPass"
          value={author?.id}
        />
        <button
          type="submit"
          className="border-2 border-green-500 rounded-3xl w-full py-1 bg-green-300 hover:bg-green-400"
        >
          Change password
        </button>
      </form>
    </div>
  );
}
