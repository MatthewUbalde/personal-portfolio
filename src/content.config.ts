import { defineCollection, z, type SchemaContext } from "astro:content";
import { glob } from "astro/loaders";

import { experienceBadgeSchema, projectArticleSchema } from "./schemas";

/**
 * A collection of experiences of varying fields in computers or arts
 */
const experiences = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/data/experience" }),
  schema: z.array(experienceBadgeSchema),
});

/**
 * A general collection of ALL articles. This is often used as a highlight of others
 */
const articles = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: `./src/content/projects`,
  }),
  schema: ({ image }) => projectArticleSchema({ image }),
});

/**
 * Below are articles for each section in the comp-experience directory
 */
const computerExperienceLoader = (root) =>
  glob({
    pattern: "*.{md,mdx}",
    base: `./src/content/projects/${root}`,
  });

const gamesArticles = defineCollection({
  loader: computerExperienceLoader("games"),
  schema: ({ image }: SchemaContext) => projectArticleSchema({ image }),
});

const appsArticles = defineCollection({
  loader: computerExperienceLoader("apps"),
  schema: ({ image }: SchemaContext) => projectArticleSchema({ image }),
});

const websitesArticles = defineCollection({
  loader: computerExperienceLoader("web"),
  schema: ({ image }: SchemaContext) => projectArticleSchema({ image }),
});

export const collections = {
  experiences,
  articles,
  gamesArticles,
  appsArticles,
  websitesArticles,
};
