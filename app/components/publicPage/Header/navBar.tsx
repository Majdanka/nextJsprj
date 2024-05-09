import Link from "next/link";

export default function NavBar() {
    return (
        <>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
        </>
    );
}