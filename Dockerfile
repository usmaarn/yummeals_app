FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json .
COPY pnpm-lock.yaml .

RUN npm i -g pnpm
RUN pnpm install

COPY . .

RUN pnpm run build
RUN pnpm prune --prod

FROM node:20-alpine AS deployer

WORKDIR /app

COPY --from=builder /app/build build/
COPY --from=builder /app/package.json .

EXPOSE 3000

ENV NODE_ENV=production

CMD sh -c "ORIGIN=https://yummeals.telzz.com HOST=0.0.0.0 PORT=3000 node build"