import { signOut } from "@/auth";

export default function LogoutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
      className=" h-[68vh] flex justify-center items-end"
    >
      <button className="flex py-2 border border-red-400 rounded-3xl w-[98%] items-center justify-center text-red-400 hover:bg-red-300 hover:text-red-500 cursor-pointer">
        Log out
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    </form>
  );
}
