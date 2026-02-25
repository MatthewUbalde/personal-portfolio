import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
import { z } from "astro/zod";

import { experienceBadgeSchema, projectArticleSchema } from "./schema";

const experiences = defineCollection({
  loader: file("./src/data/experience.yaml"),
  schema: z.array(experienceBadgeSchema),
});

const webProjects = defineCollection({
  loader: glob({ pattern: "*.{md,mdx}", base: "./src/content/webProjects" }),
  schema: ({ image }) => projectArticleSchema({ image }),
});

const gameProjects = defineCollection({
  loader: glob({ pattern: "*.{md,mdx}", base: "./src/content/gameProjects" }),
  schema: ({ image }) => projectArticleSchema({ image }),
});

export const collections = {
  experiences,
  webProjects,
  gameProjects,
};
