import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import prisma from './app/prisma';
import { User } from '.prisma/client';
import bcrypt from 'bcrypt';
import { z } from 'zod';
 
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
        async authorize(credentials, request) {
          const { userName, password } = credentials;
          const user = await getUser(userName);
          if (!user) {
            throw new Error('Invalid credentials');
          }
          const isValidPassword = await bcrypt.compare(password, user.password);
          if (!isValidPassword) {
            throw new Error('Invalid credentials');
          }
          return user;
        }
    })
  ],
});
