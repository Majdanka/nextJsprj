import { Inter } from "next/font/google";
import Aside from "../components/dashboard/aside";
import MobileAside from "../components/dashboard/mobileAside";
import LogoutButton from "../components/dashboard/logoutButton";

export const metadata = {
  title: "Dashboard",
  description: "Generated by Next.js",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={
        inter.className +
        " flex items-center h-screen justify-center w-full flex-col md:flex-row"
      }
    >
      <Aside />
      <MobileAside />
      <main className="h-fit md:h-[98vh] w-[98%] md:w-[79%] flex rounded-3xl bg-slate-200 flex-col items-center">
        {children}
      </main>
      <footer className="md:hidden">
        <LogoutButton />
      </footer>
    </div>
  );
}
