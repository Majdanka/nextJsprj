"use client";

import { authenticate } from "@/app/actions";
import { useFormState } from "react-dom";

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <fieldset className="border-2 bg-slate-300 border-green-600 rounded-3xl w-1/3 h-fit p-8 md:p-0 md:h-[80vh] text-2xl text-green-700 font-bold">
      <legend className="ml-1 font-bold">Log in</legend>
      <form
        action={dispatch}
        className="flex flex-col justify-center items-center w-full h-fit md:h-[80vh]"
      >
        <label htmlFor="userName">User name</label>
        <input
          type="text"
          id="userName"
          name="userName"
          className="border-green-500 focus:outline-green-500 bg-slate-300 border-b-2 mb-10 mt-1"
          autoComplete="off"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          className="border-green-500 focus:outline-green-500 bg-slate-300 border-b-2 mb-10 mt-1"
        />
        <button
          type="submit"
          className="bg-green-600 text-white rounded-lg text-sm md:text-3xl p-24 py-1 hover:bg-green-700"
        >
          Log in
        </button>
        <p className="text-red-500 mt-5">{errorMessage}</p>
      </form>
    </fieldset>
  );
}
