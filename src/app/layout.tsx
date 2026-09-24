import type { Metadata } from "next";
import "@/styles/globals.css";
import Providers from "@/components/providers";
import { geistMono, geistSans, incognito, pixelifySans } from "@/assets/fonts";
import { cn } from "@/lib/utils";
import MotionConfigWrapper from "@/components/motion-config";
import { siteConfig } from "@/config/site";
import Script from "next/script";
import env from "@/config/env";
import FloatingAvatar from "@/components/floating-avatar";
// import FloatingAvatar from "@/components/floating-avatar";


export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  keywords: [
    "Full-Stack Developer", "Next.js Developer", "React Developer",
    "FastAPI Developer", "Web Developer Kazakhstan", "CRM Development",
    "Telegram Bot Development", "MVP Development",
  ],

  openGraph: {
    images: [
      {
        url: "/og-image.png",
        alt: "Kazbek — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "mx-auto font-sans antialiased",
          geistSans.variable,
          geistMono.variable,
          incognito.variable,
          pixelifySans.variable,
        )}
      >
        <Providers>
          <MotionConfigWrapper>
            <FloatingAvatar />
            {children}
          </MotionConfigWrapper>
        </Providers>

        {env.NEXT_PUBLIC_UMAMI_WEBSITE_ID ? (
          <Script
            defer
            src="https://cloud.umami.is/script.js"
            data-website-id={env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          />
        ) : null}
      </body>
    </html>
  );
}
