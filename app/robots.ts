import { MetadataRoute } from "next";
import { url } from "@/app/utils/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin/",
    },
    sitemap: `${url}/sitemap.xml`,
  };
}
