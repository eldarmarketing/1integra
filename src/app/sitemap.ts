import type { MetadataRoute } from "next";
import { DIRECTIONS } from "@/data/directions";
import { MODULES } from "@/data/modules";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://1integra.ru";

  const directionPages = DIRECTIONS.map((d) => ({
    url: `${baseUrl}/uslugi/${d.slug}`,
    lastModified: new Date("2026-04-14"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const modulePages = MODULES.map((m) => ({
    url: `${baseUrl}/moduli/${m.slug}`,
    lastModified: new Date("2026-04-14"),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-04-14"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/uslugi`,
      lastModified: new Date("2026-04-14"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/moduli`,
      lastModified: new Date("2026-04-14"),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/o-kompanii`,
      lastModified: new Date("2026-04-14"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/garantii`,
      lastModified: new Date("2026-04-14"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/stoimost`,
      lastModified: new Date("2026-04-14"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontakty`,
      lastModified: new Date("2026-04-14"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...directionPages,
    ...modulePages,
  ];
}
