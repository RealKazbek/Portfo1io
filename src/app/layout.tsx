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

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  applicationName: "Kazbek Portfolio",
  authors: [{ name: "Kazbek", url: siteConfig.url }],
  creator: "Kazbek",
  publisher: "Kazbek",
  category: "technology",
  alternates: { canonical: "/" },
  keywords: ["Kazbek", "RealKazbek", "Kazbek Developer", "Kazbek Software Developer", "Kazbek Full-Stack Developer", "Full-Stack Developer Kazakhstan", "Software Developer Kazakhstan", "Web Developer Kazakhstan", "Next.js Developer Kazakhstan", "React Developer Kazakhstan", "FastAPI Developer Kazakhstan"],
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: { title: siteConfig.title, description: siteConfig.description, url: siteConfig.url, siteName: "Kazbek Portfolio", type: "website", images: [{ url: siteConfig.image, alt: "Kazbek — Full-Stack Software Developer from Kazakhstan" }] },
  twitter: { card: "summary_large_image", title: siteConfig.title, description: siteConfig.description, images: [siteConfig.image] },
};

const personId = `${siteConfig.url}/#person`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = { "@context": "https://schema.org", "@graph": [
    { "@type": "Person", "@id": personId, name: siteConfig.name, url: siteConfig.url, image: `${siteConfig.url}${siteConfig.image}`, jobTitle: "Full-Stack Developer", sameAs: [siteConfig.github, siteConfig.telegram], knowsAbout: ["React", "Next.js", "TypeScript", "FastAPI", "Python", "PostgreSQL", "Docker", "Web Development", "Software Development"] },
    { "@type": "WebSite", "@id": `${siteConfig.url}/#website`, url: siteConfig.url, name: "Kazbek Portfolio", publisher: { "@id": personId } },
    { "@type": "ProfilePage", "@id": `${siteConfig.url}/#profilepage`, url: siteConfig.url, name: siteConfig.title, isPartOf: { "@id": `${siteConfig.url}/#website` }, mainEntity: { "@id": personId } },
  ] };
  return <html lang="en" suppressHydrationWarning><body className={cn("mx-auto font-sans antialiased", geistSans.variable, geistMono.variable, incognito.variable, pixelifySans.variable)}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <Providers><MotionConfigWrapper><FloatingAvatar />{children}</MotionConfigWrapper></Providers>
    {env.NEXT_PUBLIC_UMAMI_WEBSITE_ID ? <Script defer src="https://cloud.umami.is/script.js" data-website-id={env.NEXT_PUBLIC_UMAMI_WEBSITE_ID} /> : null}
  </body></html>;
}
