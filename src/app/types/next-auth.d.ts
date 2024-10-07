
import { JWT as DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    id: string; 
    accessToken?: string; 
  }

  interface User {
    id: string; 
    accessToken?: string; 
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string; 
    accessToken?: string; 
  }
}

