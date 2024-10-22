import { hc } from "hono/client";
import { AppType } from "@/app/api/[[...route]]/route";

export const client = hc<AppType>(process.env.NEXT_PUBLIC_APP_URL!);

/* 
hc is a Hono Client utility for making HTTP requests to an API. It helps you interact with your API endpoints as if they were functions
hc<AppType> means you're telling hc that the client will follow the structure of AppType.
AppType defines the shape or structure of your API routes (like /auth/login), so the client will only allow you to call routes and pass data that matches this structure. */