import { addUser } from "@/app/actions";

export default function AddUserForm() {
  return (
    <form
      action={addUser}
      className="flex flex-col border-2 border-green-400 rounded-3xl h-[75vh] w-5/6 md:w-1/3 items-center justify-evenly"
    >
      <input
        className="rounded-3xl p-3 w-3/4 border-gray-500 focus:outline-none focus:border-2 focus:border-green-500 border"
        type="text"
        placeholder="Username"
        name="username"
      />
      <input
        className="rounded-3xl p-3 w-3/4 border-gray-500 focus:outline-none focus:border-2 focus:border-green-500 border"
        type="password"
        placeholder="Password"
        name="password"
      />
      <input
        className="rounded-3xl p-3 w-3/4 border-gray-500 focus:outline-none focus:border-2 focus:border-green-500 border"
        type="password"
        placeholder="Repeat Password"
        name="repeatPassword"
      />
      <button
        type="submit"
        className="w-3/4 rounded-3xl bg-green-300 border border-green-400 px-4 py-2 text-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300 ease-in-out"
      >
        Add User
      </button>
    </form>
  );
}
