import {WordList} from "@prisma/client";
import {DefaultSession} from "next-auth";

declare module "next-auth" {
  interface User extends DefaultSession.user {
    wordLists: WordList[];
  }
  interface Session {
    user: {
      wordLists: WordList[];
    } & DefaultSession["user"];
  }
}
