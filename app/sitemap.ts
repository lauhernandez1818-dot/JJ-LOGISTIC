import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : SITE_URL);

export default function sitemap(): MetadataRoute.Sitemap {
  const url = baseUrl.replace(/\/$/, "");
  return [
    {
      url: `${url}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
