import Logo from "./logo";
import NavBar from "./navBar";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="flex justify-center flex-row bg-gradient-to-r from-green-200 to-yellow-200 rounded-full m-1 h-16 items-center w-full">
        <div className="flex justify-evenly md:w-2/3 w-full">
          <div className="flex h-16 align-middle w-full pl-1 items-center">
            <Logo />
            <Link href="../..">
              <h1 className="ml-3 text-xl font-bold">Personal site</h1>
            </Link>
          </div>
        </div>
        <nav className="justify-evenly w-1/3 font-semibold hidden md:flex">
          <NavBar />
        </nav>
      </header>
      <nav className="md:hidden flex justify-evenly  items-center w-[99%] rounded-full bg-gradient-to-r from-orange-200 to-violet-200 border-collapse h-[5vh] m-1 text-[1.3rem]">
        <NavBar />
      </nav>
    </>
  );
}
