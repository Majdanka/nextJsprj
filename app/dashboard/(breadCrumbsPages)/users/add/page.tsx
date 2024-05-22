import { cookies } from "next/headers";
import { fetchCurrentUser } from "@/app/actions";
import AddUserForm from "@/app/components/dashboard/addUserForm";

export default async function AddUserPage() {
  const username = cookies().get("userName")?.value;
  const user = username ? await fetchCurrentUser({ userName: username }) : null;
  if (user && user.id == 1) {
    return (
      <div className="w-full h-[80vh] flex justify-center items-center">
        <AddUserForm />
      </div>
    );
  } else {
    return (
      <div className="w-full h-[80vh] flex items-center justify-center text-3xl font-semibold">
        You don&#39t have acces to this page
      </div>
    );
  }
}
