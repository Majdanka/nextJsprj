import { Metadata } from "next";
import Aside from "../components/publicPage/homePage/aside";
import ImageLink from "../components/publicPage/homePage/imageLink";

export const metadata: Metadata = {
  title: "Home | personal-site",
  description: "Home page",
};

export default function Home() {
  return (
    <>
      <main className="w-full md:w-[69%] bg-orange-300 rounded-3xl md:h-[80vh] flex flex-col items-center h-[130vh]">
        <h1 className="text-3xl p-2">Welcome!</h1>
        <div className="w-full h-[65vh] md:h-[40vh] flex items-center justify-evenly md:flex-row flex-col">
          <ImageLink src="" alt="Gallery" href="/gallery" />
          <ImageLink src="" alt="Blog" href="/blog" />
        </div>
        <div className="w-full h-[65vh] md:h-[40vh] flex items-center justify-evenly md:flex-row flex-col mt-[-3vh]">
          <ImageLink src="" alt="About" href="/about" />
          <ImageLink src="" alt="Contact" href="/contact" />
        </div>
      </main>
      <aside className="md:m-0 w-full md:w-[30%] rounded-3xl h-[80vh] bg-violet-300">
        <h1>Recent posts: </h1>
        <Aside />
      </aside>
    </>
  );
}
