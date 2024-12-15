FROM node:lts
# For an in depth guide on configuring the base node image, see the official Next.js with-docker example here:
# https://github.com/vercel/next.js/tree/canary/examples/with-docker

RUN npm install -g pnpm

COPY . /cui
WORKDIR /cui
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm i -r
WORKDIR /cui/composable-ui

CMD ["pnpm", "dev"]
EXPOSE 80
