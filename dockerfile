FROM 592826755224.dkr.ecr.us-east-2.amazonaws.com/node:18.16.0

ARG NODE_ENV

RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install -g npm@9.5.1
RUN npm install -g pnpm@8.2.0
RUN pnpm install
RUN if [ "$NODE_ENV" = "stage" ]; then pnpm tsc && pnpm run build:develop; \
    elif [ "$NODE_ENV" = "development" ]; then pnpm tsc && pnpm run build:develop; \
    else [  "$NODE_ENV" = "prod" ]; pnpm tsc && pnpm run build; fi

EXPOSE 3000
#CMD ["pnpm", "start"]


