FROM node:16-alpine

WORKDIR /app

ENV NODE_ENV production

COPY /next.config.mjs ./
COPY /public ./public
COPY /package.json ./package.json
COPY /.next/standalone ./
COPY /.next/static ./.next/static
COPY /prisma ./prisma

RUN yarn install --production=true

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]