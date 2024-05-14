import { Metadata } from "next";
import GalleryHandler from "@/app/components/galleryPage/galleryHandler";

export const metadata: Metadata = {
  title: "Gallery",
};

export default function Gallery() {
  return (
    <main className="w-[99%] bg-orange-300 rounded-3xl md:h-[80vh] flex flex-col items-center h-[130vh]">
      <h1 className="text-4xl font-bold pt-2">Gallery</h1>
      <GalleryHandler />
    </main>
  );
}
