import type { MetadataRoute } from "next";
import { SERVICES } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://1integra.ru";

  const servicePages = SERVICES.map((s) => ({
    url: `${baseUrl}/uslugi/${s.slug}`,
    lastModified: new Date("2026-04-09"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-04-09"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/uslugi`,
      lastModified: new Date("2026-04-09"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/o-kompanii`,
      lastModified: new Date("2026-04-09"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/garantii`,
      lastModified: new Date("2026-04-09"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/stoimost`,
      lastModified: new Date("2026-04-09"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontakty`,
      lastModified: new Date("2026-04-09"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...servicePages,
  ];
}
