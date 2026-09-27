import env from "@/config/env";
import { toNextJsHandler } from "better-auth/next-js";

const unavailable = () => new Response("Authentication is not configured", { status: 503 });

export async function GET(request: Request) {
  if (!env.DATABASE_URL) return unavailable();
  const { auth } = await import("@/lib/auth");
  return toNextJsHandler(auth.handler).GET(request);
}

export async function POST(request: Request) {
  if (!env.DATABASE_URL) return unavailable();
  const { auth } = await import("@/lib/auth");
  return toNextJsHandler(auth.handler).POST(request);
}
