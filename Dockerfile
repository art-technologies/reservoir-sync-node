FROM node:18 AS build

WORKDIR /app

COPY package.json contracts.txt ./

RUN npm install

COPY . .

RUN npm run database:generate
RUN npm run build
RUN npm run build:viewer

FROM node:18-slim AS production

RUN apt-get update -y && apt-get install -y openssl

WORKDIR /app

COPY --from=build /app/package.json /app/package-lock.json ./
COPY --from=build /app/prisma ./prisma
RUN touch ./.env

RUN npm install --production

COPY --from=build /app/dist ./dist
COPY --from=build /app/contracts.txt ./dist/contracts.txt
COPY --from=build /app/entrypoint.sh ./entrypoint.sh

WORKDIR ./

EXPOSE 3000

# Use the entrypoint script to start the application
ENTRYPOINT ["./entrypoint.sh"]

CMD ["node", "dist/index.js"]
