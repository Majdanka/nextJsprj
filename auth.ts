import NextAuth, { User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import prisma from './app/prisma';
import { User as UserP} from '.prisma/client';
import { z } from 'zod';
import { cookies } from 'next/headers';
 
async function getUser(userName: string): Promise<UserP | undefined> {
  try {
    const user : UserP | null = await prisma.user.findFirst({ where: { userName}});
    return user || undefined;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
 
export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            credentials: {
                userName: { label: "User name" },
                password: {  label: "Password", type: "password" }
              },
              async authorize(credentials, req) {
                const formatedCredentials = z.object({
                    userName: z.string(),
                    password: z.string()
                }).parse(credentials);
                const user: UserP | undefined = await getUser(formatedCredentials.userName);
                if (!user) {
                    throw new Error("Invalid credentials.");
                }
                const passwordMatch = (formatedCredentials.password === user.password)
                if (!passwordMatch) {
                    throw new Error("Invalid credentials.");
                }
                
                const store = cookies();
                store.set('userName', user.userName,)

                const userData: User = { id: user.id.toString(), name: user.userName};
                
                return userData;
        }}),
    ],
});