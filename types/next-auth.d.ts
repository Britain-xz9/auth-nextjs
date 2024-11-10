// types/next-auth.d.ts
import { Session } from 'next-auth';
import { JWT as NextAuthJWT } from 'next-auth/jwt';
import { Account as NextAuthAccount } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    access_token: string; // Ensure access_token is always a string
    id_token: string;     // Ensure id_token is always a string
  }

  interface JWT {
    access_token: string; // Ensure access_token is always a string
    id_token: string;     // Ensure id_token is always a string
  }

  interface Account {
    access_token: string; // Ensure access_token is always a string
    id_token: string;     // Ensure id_token is always a string
  }
}
