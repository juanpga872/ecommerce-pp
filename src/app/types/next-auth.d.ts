// types/next-auth.d.ts
import NextAuth, { DefaultSession } from "next-auth";
import { JWT as DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    id: string; // Agregar el campo id a la sesión
    accessToken?: string; // Agregar accessToken opcional
  }

  interface User {
    id: string; // Agregar el campo id al usuario
    accessToken?: string; // El token JWT del usuario
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string; // Agregar el campo id opcional al token
    accessToken?: string; // Agregar el campo accessToken al token
  }
}

