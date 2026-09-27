import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://realkazbek.site";
  return [{ url: baseUrl, changeFrequency: "monthly", priority: 1 }, { url: `${baseUrl}/portfolio`, changeFrequency: "monthly", priority: 0.8 }];
}
