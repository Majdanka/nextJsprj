import Image from "next/image";
//pozniejsze zdjecie
import Link from "next/link";

export default function Logo() {
    return (
        <Link href='../..'>
            <div className="rounded-full h-16 w-16 bg-orange-400"></div>
        </Link>
    );
}