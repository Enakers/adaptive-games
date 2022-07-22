import {User, WordList} from "@prisma/client";
import {NextApiHandler} from "next";
import {unstable_getServerSession as getServerSession} from "next-auth";
import {prisma} from "../../../server/db/client";
import {authOptions} from "../auth/[...nextauth]";

const handler: NextApiHandler = async (req, res) => {
  const session = await getServerSession(req, res, authOptions);
  const email = session?.user?.email;

  if (!email) return res.status(401).json({message: "Unauthorised"});

  const wordList = JSON.parse(req.body) as WordList;

  let user: User;

  switch (req.method) {
    case "POST": {
      user = await prisma.user.update({where: {email}, data: {wordLists: {push: wordList}}});
      break;
    }
    case "PUT": {
      user = await prisma.user.update({
        where: {email},
        data: {
          wordLists: {updateMany: {where: {name: wordList.name}, data: {words: wordList.words}}}
        }
      });
      break;
    }
    case "DELETE": {
      user = await prisma.user.update({
        where: {email},
        data: {wordLists: {deleteMany: {where: {name: wordList.name}}}}
      });
      break;
    }
    default: {
      return res.status(405).json({message: "Method not allowed"});
    }
  }

  return res.status(200).json(user.wordLists);
};

export default handler;
