import env from "./env";



export const siteConfig = {
    title: "Kazbek — Full-Stack Developer",
    description: "Full-stack developer building web applications, CRM systems, MVPs, and Telegram solutions for businesses.",
    url: env.NEXT_PUBLIC_APP_URL,
    github: `https://github.com/${env.NEXT_PUBLIC_GITHUB_USERNAME}`,
    email: "37765@iitu.edu.kz",
    telegram: "https://t.me/RealKazbek",

} as const;
