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
    <Link
      href={href}
      className="flex justify-center items-center flex-col bg-white w-4/5 h-44 md:w-2/5 md:h-56"
    >
      <div className="flex flex-col justify-center items-center w-full">
        {src ? (
          <Image
            src={src}
            alt={alt}
            width={16}
            height={16}
            className=" border-black border-[1px]"
          />
        ) : (
          <div className="w-3/4 h-32 bg-violet-400 md:w-5/6 md:h-36"></div>
        )}
        <h1>{alt}</h1>
      </div>
    </Link>
  );
}
