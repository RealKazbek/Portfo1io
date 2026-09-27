import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://realkazbek.site/sitemap.xml", host: "https://realkazbek.site" };
}
