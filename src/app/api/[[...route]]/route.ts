//path - src/app/api/[[...route]]/route.ts

import { Hono } from "hono";
import { handle } from "hono/vercel";
import auth from "@/features/auth/server/route"

/* 
we are  creating an authentication route = " /auth/login ", which handles login requests by validating the user's input (email and password) using zvalidator.
This API is then hooked into Vercel to be deployed as a serverless function.
we can use AWS LAMBDA also for serverless function which is Similar to Vercel’s serverless, where we can integrate with other AWS or Google Cloud services.
Requires some configuration and might not be as seamless as Vercel, but gives more granular control
*/

const app = new Hono().basePath("/api");
const routes = app.route("/auth",auth)
export const GET = handle(app);
export const POST = handle(app);
export type AppType = typeof routes;