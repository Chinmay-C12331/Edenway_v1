import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://edenwayschool.in";
  const routes = [
    "",
    "/about",
    "/history",
    "/academics",
    "/admissions",
    "/campus",
    "/achievements",
    "/results",
    "/events",
    "/sports",
    "/faculty",
    "/alumni",
    "/notices",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/notices" ? "daily" : "monthly",
    priority: route === "" ? 1.0 : route === "/admissions" ? 0.9 : 0.8,
  }));
}
