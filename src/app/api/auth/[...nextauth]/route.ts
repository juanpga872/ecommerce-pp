import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Enter your username" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Llamada al backend para el login
        const res = await fetch('http://192.168.88.39:7000/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: credentials?.username, // Cambiar a username
            password: credentials?.password
          }),
        });

        const data = await res.json();

        if (res.ok && data) {
          // Asegurarse de que se devuelve el token y el usuario
          return {
            id: data.user._id, // Almacena el id del usuario
            accessToken: data.access_token, // Almacena el token
            ...data.user // Guarda el resto de la información del usuario
          }; // Retornar el usuario si las credenciales son correctas
        } else {
          return null; // Retornar null si las credenciales no son correctas
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Agregar el id del usuario al token
        token.accessToken = user.accessToken; // Guardar el token de acceso en el JWT
      }
      return token;
    },
    async session({ session, token }) {
      if (token.id) {
        session.id = token.id; // Pasar el id al session
        session.accessToken = token.accessToken; // Guardar el token en la sesión
      }
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };


