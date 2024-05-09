import { GetServerSideProps, Metadata } from "next";
import prisma from "../prisma";

export const metadata: Metadata = {
  title: "Home | personal-site",
};

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <main>
      {users.map((user) => (
        <div>{user.userName}</div>
      ))}
    </main>
  );
}
