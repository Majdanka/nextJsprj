import Link from "next/link";
import Image from "next/image";

export default function ImageLink({
  src,
  alt,
  href,
}: {
  src: string;
  alt: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <div className="flex justify-center items-center flex-col bg-white w-72 h-44">
        {src ? (
          <Image
            src={src}
            alt={alt}
            width={16}
            height={16}
            className=" border-black border-[1px]"
          />
        ) : (
          <div className="w-64 h-32 bg-violet-400"></div>
        )}
        <h1>{alt}</h1>
      </div>
    </Link>
  );
}
