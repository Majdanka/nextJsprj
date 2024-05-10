import { Metadata } from "next";
import Aside from "../components/publicPage/homePage/aside";

export const metadata: Metadata = {
  title: "Home | personal-site",
  description: "Home page",
};

export default function Home() {
  return (
    <>
      <main className="w-[69%] bg-orange-300 rounded-3xl h-[80vh]"></main>
      <aside className="w-[30%] rounded-3xl h-[80vh] bg-violet-300">
        <h1>Recent posts: </h1>
        <Aside />
      </aside>
    </>
  );
}
