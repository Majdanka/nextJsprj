"use client";

import clsx from "clsx";
import ChosenImage from "./chosenImage";
import ImageNav from "./imageNav";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default async function GalleryHandler() {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const current = searchParams.get("image") ? searchParams.get("image") : "r3";

  function handleClick(key: string) {
    const params = new URLSearchParams(searchParams);
    if (key) {
      params.set("image", key);
    } else {
      params.delete("image");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  const images = [];
  for (let i = 3; i < 10; i++) {
    images.push(
      <div
        key={"r" + 1}
        className={clsx(
          "h-24 w-1/7 rounded-3xl mt-3 flex flex-col items-center justify-center",
          { "bg-red-300": i == 3 },
          { "bg-red-400": i == 4 },
          { "bg-red-500": i == 5 },
          { "bg-red-600": i == 6 },
          { "bg-red-700": i == 7 },
          { "bg-red-800": i == 8 },
          { "bg-red-900": i == 9 },
          { "text-white border-2 border-white": current == "r" + i }
        )}
        onClick={() => handleClick("r" + i)}
      >
        Czerwony {i - 2}
      </div>
    );
    images.push(
      <div
        key={"b" + 1}
        className={clsx(
          "h-24 w-1/7 rounded-3xl mt-3 flex flex-col items-center justify-center",
          { "bg-blue-300": i == 3 },
          { "bg-blue-400": i == 4 },
          { "bg-blue-500": i == 5 },
          { "bg-blue-600": i == 6 },
          { "bg-blue-700": i == 7 },
          { "bg-blue-800": i == 8 },
          { "bg-blue-900": i == 9 },
          { "text-white border-2 border-white": current == "b" + i }
        )}
        onClick={() => handleClick("b" + i)}
      >
        Niebieski {i - 2}
      </div>
    );
  }

  return (
    <>
      <ChosenImage img={current ? current : "r3"} />
      <div className="w-full grid grid-cols-2 md:grid-cols-7 gap-1 mt-1">
        {images}
      </div>
      <ImageNav />
    </>
  );
}
