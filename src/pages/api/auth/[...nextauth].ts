import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],

  secret: process.env.SECRET,

  session: {
    strategy: 'jwt',
  },

  jwt: {
    secret: process.env.SECRET,
  },

  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
    newUser: '/auth/error',
  },

  callbacks: {
    async redirect({ baseUrl }) {
      return baseUrl + '/analytics';
    },

    async session({ session }) {
      return session;
    },

    async jwt({ token }) {
      return token;
    },
  },

  debug: false,
});
