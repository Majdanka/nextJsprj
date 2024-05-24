import { Metadata } from "next";
import GalleryHandler from "@/app/components/galleryPage/galleryHandler";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function Gallery() {
  return (
    <main className="w-[99%] bg-orange-300 rounded-3xl md:h-[80vh] md:p-0 flex flex-col items-center h-fit p-5">
      <h1 className="text-4xl font-bold pt-2">Gallery</h1>
      <Suspense fallback="Loading gallery... ">
        <GalleryHandler />
      </Suspense>
    </main>
  );
}
