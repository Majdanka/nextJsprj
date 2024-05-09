import { Metadata } from "next";
import Block from "../components/publicPage/homePage/block";
import ImageBorder from "../components/publicPage/homePage/imageBorder";
import Aside from "../components/publicPage/homePage/aside";

export const metadata: Metadata = {
  title: "Home | personal-site",
};

export default function Home() {
  return (
    <>
      <main className="w-[79%] rounded-3xl h-[80vh] bg-orange-200 p-2">
        <Block>
          <ImageBorder src="" alt="Blog" />
          <ImageBorder src="" alt="About" />
        </Block>
        <Block>
          <ImageBorder src="" alt="Gallery" />
          <ImageBorder src="" alt="Contact" />
        </Block>
      </main>
      <aside className="w-[20%] rounded-3xl h-[80vh] bg-red-200 p-3 ">
        <Aside />
      </aside>
    </>
  );
}
