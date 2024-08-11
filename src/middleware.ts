import { defineMiddleware } from "astro:middleware";
import { account } from "./lib/appwrite";

export const onRequest = defineMiddleware(async ({ request, locals }, next) => {
  try {
    locals.user = await account.get();
  } catch {
    return null
  }

  return next();
});