import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";


 export declare module "next-auth" {
  interface Session {
    id: string; 
    accessToken?: string; 
  }

  interface User {
    id: string; 
    accessToken?: string; 
  }
}

export declare module "next-auth/jwt" {
  interface JWT {
    id?: string; 
    accessToken?: string; 
  }
}

