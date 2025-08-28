import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

// Secret for JWT (must match middleware secret)
const secret = "my-secret-key";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "123456",
        },
      },
      async authorize(credentials) {
        // Here we call your backend login API
        try {
          const res = await axios.post("http://localhost:5000/api/login", {
            username: credentials.username,
            password: credentials.password,
          });

          const user = res.data.user; // your backend should return { user: { id, name, ... } }

          if (user) {
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.error("Login error:", error.response?.data || error.message);
          return null;
        }
      },
    }),
  ],

  session: {
    strategy: "jwt", // important to use JWT for middleware protection
  },

  jwt: {
    secret: secret,
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user; // store user in JWT token
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.user) {
        session.user = token.user; // attach user info to session
      }
      return session;
    },
  },

  secret: secret,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
