import Logo from "./logo";
import NavBar from "./navBar";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-center flex-col md:flex-row bg-gradient-to-r from-green-200 to-yellow-200 rounded-full m-1 h-16 items-center">
            <div className="flex justify-evenly w-2/3">
                <div className="flex h-16 align-middle w-full pl-1 items-center">
                    <Logo />
                    <Link href='../..'>
                        <h1 className="ml-3 text-xl font-bold">Personal site</h1>
                    </Link>
                </div>
            </div>
            <nav className="flex justify-evenly w-1/3 font-semibold">
                <NavBar />
            </nav>
        </header>
    );
}