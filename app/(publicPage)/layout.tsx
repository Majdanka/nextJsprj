import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/publicPage/Header/header";
import Footer from "../components/publicPage/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | personal-site",
    default: "personal-site",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body
      className={
        "flex flex-wrap justify-center items-center m-0 p-0 bg-slate-300 flex-col md:flex-row " +
        inter.className
      }
    >
      <Header />
      {children}
      <Footer />
    </body>
  );
}
