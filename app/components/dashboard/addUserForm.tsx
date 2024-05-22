export default function AddUserForm() {
  return (
    <form className="flex flex-col border-2 border-green-400 rounded-3xl h-[75vh] w-1/3 items-center justify-evenly">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Add User</button>
    </form>
  );
}
