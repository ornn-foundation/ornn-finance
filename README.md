<p align="center">
  <a href="https://nextjs.org/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">
  <a aria-label="Vercel logo" href="https://vercel.com">
    <img src="https://img.shields.io/badge/MADE%20BY%20Vercel-000000.svg?style=for-the-badge&logo=Vercel&labelColor=000">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/next">
    <img alt="" src="https://img.shields.io/npm/v/next.svg?style=for-the-badge&labelColor=000000">
  </a>
  <a aria-label="License" href="https://github.com/vercel/next.js/blob/canary/license.md">
    <img alt="" src="https://img.shields.io/npm/l/next.svg?style=for-the-badge&labelColor=000000">
  </a>
  <a aria-label="Join the community on GitHub" href="https://github.com/vercel/next.js/discussions">
    <img alt="" src="https://img.shields.io/badge/Join%20the%20community-blueviolet.svg?style=for-the-badge&logo=Next.js&labelColor=000000&logoWidth=20">
  </a>
</p>

[![Netlify Status](https://api.netlify.com/api/v1/badges/6f87d450-09ac-4e0f-adb9-a82962fd918f/deploy-status)](https://app.netlify.com/sites/ornn-finance/deploys)

## Description

[Next](https://github.com/vercel/next.js) gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.

## Getting Started

Visit <a aria-label="next.js learn" href="https://nextjs.org/learn">https://nextjs.org/learn</a> to get started with Next.js.

## Documentation

Visit [https://nextjs.org/docs](https://nextjs.org/docs) to view the full documentation.

## Environment Variables

Next.js has built-in support for loading environment variables from .env into process.env.

Create an .env file. :

```shell
# .env
# NODE ENV
HOST_NAME=localhost
PORT=3000
HOST=http://$HOST_NAME:$PORT

# HOST API
HOST_NAME_API=localhost
PORT_API=3100
PRE_FIX=api
HOST_API=http://$HOST_NAME_API:$PORT_API
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run dev

# build
$ npm run build

# production mode
$ npm run start
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Next is [MIT licensed](LICENSE).
