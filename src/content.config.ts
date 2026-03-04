import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
import { z } from "astro/zod";

import {
  experienceBadgeSchema,
  projectArticleSchema,
  resumeItemSchema,
} from "./schema";

const resume = defineCollection({
  loader: file("./src/data/resume.yaml"),
  schema: z.array(resumeItemSchema),
});

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
  resume,
  experiences,
  webProjects,
  gameProjects,
};
