import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : SITE_URL);

export default function robots(): MetadataRoute.Robots {
  const url = baseUrl.replace(/\/$/, "");
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${url}/sitemap.xml`,
  };
}
