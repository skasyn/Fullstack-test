FROM node:alpine as dependencies
WORKDIR /app/fullstack-test/back
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:alpine as builder
WORKDIR /app/fullstack-test/back
COPY . .
COPY --from=dependencies /app/fullstack-test/back/node_modules ./node_modules
RUN yarn build

FROM node:alpine as runner
WORKDIR /app/fullstack-test/back

ENV NODE_ENV dev

COPY --from=builder /app/fullstack-test/back/node_modules ./node_modules
COPY --from=builder /app/fullstack-test/back/package.json ./package.json
COPY --from=builder /app/fullstack-test/back/tsconfig.json ./tsconfig.json
COPY --from=builder /app/fullstack-test/back/dist ./dist

EXPOSE 8000

CMD ["node", "-r", "tsconfig-paths/register", "./dist/server.js"]