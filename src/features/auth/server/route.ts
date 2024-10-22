import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { loginSchema, registerSchema } from "@/features/schemas";

/* our middlware here zValidator which checks if the incoming data matches a specific pattern or rules (like email must be a valid email, password can't be empty) */

const auth = new Hono()
  .post("/login", zValidator("json", loginSchema), c => {
    let { email, password } = c.req.valid("json");
    return c.json({ email, password });
  })
  .post("/register", zValidator("json", registerSchema), c => {
    let { email, name, password } = c.req.valid("json");
    return c.json({ name, email, password });
  });

/* 
rpc from hono :
RPC, or Remote Procedure Call, is a way for your application to make a "call" (request) to run a function on a server, just like you would call a function in code. It hides the complexity of network communication, making it feel like you're calling a local function.

In the RPC approach, calling the /login route feels like calling a function directly (like an auth.login() function).
In the non-RPC approach, this is a traditional HTTP POST request where you hit an endpoint, and the server handles login logic in a standard RESTful way.

without rpc:
// Define the Hono app and the login route
const auth = new Hono();
// POST request to /login (standard REST API)
auth.post("/login", zValidator("json", loginSchema), (c) => {
  return c.json({ success: 1234 });
});

export default auth;
 */

export default auth;
