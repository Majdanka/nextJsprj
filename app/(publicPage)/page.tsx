import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | personal-site",
};

export default function Home() {
  return (
    <>
      <main className="w-[79%] rounded-3xl h-[80vh] bg-orange-200"></main>
      <aside className="w-[20%] rounded-3xl h-[80vh] bg-red-200"></aside>
    </>
  );
}
