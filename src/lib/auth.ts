import "server-only";

import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./prisma";
import env from "@/config/env";
import { customSession } from "better-auth/plugins";


const baseUrl = env.BETTER_AUTH_URL  

export const auth = betterAuth({
    baseURL: baseUrl,
    secret: env.BETTER_AUTH_SECRET ?? "local-development-secret",
    trustedOrigins: ["http://localhost:3000", baseUrl],

    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),

    session: {
        cookieCache: {
            enabled: true,
            maxAge: 5 * 60, // Cache duration in seconds
        },
        expiresIn: 30 * 24 * 60 * 60, // 30 days in seconds
    },

    socialProviders: {
        ...(env.GITHUB_CLIENT_ID && env.GITHUB_CLIENT_SECRET
            ? {
                github: {
                    clientId: env.GITHUB_CLIENT_ID,
                    clientSecret: env.GITHUB_CLIENT_SECRET,
                },
            }
            : {}),
        ...(env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET
            ? {
                google: {
                    clientId: env.GOOGLE_CLIENT_ID,
                    clientSecret: env.GOOGLE_CLIENT_SECRET,
                },
            }
            : {}),
    },

    plugins: [
        customSession(async ({ user, session }) => {
            const { role } = await prisma.user.findUnique({
                where: { id: session.userId },
                select: { role: true },
            }) ?? { role: null }

            return {
                role: role as "AUTHOR" | "GUEST",
                user: user,
                session
            };
        }),
    ]




});
