import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <main className="w-full md:w-[99%] bg-orange-300 rounded-3xl md:h-[80vh] flex flex-col items-center h-[130vh] justify-center">
      <h1 className="md:text-5xl text-3xl  font-bold">Contact Page</h1>
    </main>
  );
}
