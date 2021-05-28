FROM node:alpine as dependencies
WORKDIR /app/fullstack-test/front
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:alpine as builder
WORKDIR /app/fullstack-test/front
COPY . .
COPY --from=dependencies /app/fullstack-test/front/node_modules ./node_modules
RUN yarn build

FROM node:alpine as runner
WORKDIR /app/fullstack-test/front
ENV NODE_ENV dev

COPY --from=builder /app/fullstack-test/front/public ./public
COPY --from=builder /app/fullstack-test/front/.next ./.next
COPY --from=builder /app/fullstack-test/front/node_modules ./node_modules
COPY --from=builder /app/fullstack-test/front/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]