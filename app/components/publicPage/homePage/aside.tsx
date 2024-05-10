import { addPost } from "@/app/actions";
import Link from "next/link";

export default async function Aside() {
  return (
    <>
      <form
        action={async () => {
          "use server";
          return addPost("title", "content", 1);
        }}
      >
        <input type="submit" value="submit" />
      </form>
    </>
  );
}
