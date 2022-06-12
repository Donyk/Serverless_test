## test-serverless

This is a test application to deploy an api as serverless functions on [Vercel](https://vercel.com/docs/serverless-functions/introduction).

Only one function exists, at the root of the `/api` path. It connects to a MongoDb cluster, creates a document named after the `name` parameter of the request, and increment a counter of `visits` on each api call.

It is meant as a simple visit counter that can be called from anywhere, without authentication.

### Local development:

Use [Node.js](https://nodejs.org/en/), run `npm install` to install the project dependencies. 

Create an account on [MongoDB Cloud](https://www.mongodb.com/cloud), create a cluster, a user, get the connection string, rename `.envrc.example` to `.envrc` and paste the connection string there. You can use [direnv](https://direnv.net/) to make it available locally.

Install [Vercel CLI](https://vercel.com/cli) and run `vercel dev` to get started. 