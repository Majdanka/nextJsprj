import Image from "next/image";
//pozniej zdjecie

export default function ImageBorder({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="w-96 h-[32vh] bg-white rounded-3xl m-5 flex flex-col items-center justify-center">
      {/*<Image src={src} alt={alt} />*/}
      <div className="bg-violet-400 w-[320px] h-[160px]"></div>
      <p>{alt}</p>
    </div>
  );
}
