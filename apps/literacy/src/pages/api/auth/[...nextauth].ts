import {PrismaAdapter} from "@next-auth/prisma-adapter";
import NextAuth, {NextAuthOptions} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import {prisma} from "../../../server/db/client";
import {env} from "../../../server/env.mjs";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET
    })
  ]
};

export default NextAuth(authOptions);
