import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import prisma from './app/prisma';
import { User } from '.prisma/client';
import bcrypt from 'bcrypt';
import { set, z } from 'zod';
 
async function getUser(userName: string): Promise<User | undefined> {
  try {
    const user : User | null = await prisma.user.findFirst({ where: { userName}});
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
                const user = await getUser(formatedCredentials.userName);
                if (!user) {
                    throw new Error('User not found');
                }
                const passwordMatch = await bcrypt.compare(formatedCredentials.password, user.password);
                if (!passwordMatch) {
                    throw new Error('Password does not match');
                }
                
                return null
        }}),
    ],
});