"use client";

import { useFormState, useFormStatus } from "react-dom";

export default function LoginForm() {
  //const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <fieldset className="border-2 bg-slate-300 border-green-600 rounded-3xl w-1/3 h-[80vh]">
      <legend className="ml-1 font-bold">Log in</legend>
    </fieldset>
  );
}
