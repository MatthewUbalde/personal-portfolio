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
    base: `./src/content/`,
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

const gameArticles = defineCollection({
  loader: computerExperienceLoader("games"),
  schema: ({ image }: SchemaContext) => projectArticleSchema({ image }),
});

const mobileArticles = defineCollection({
  loader: computerExperienceLoader("mobile"),
  schema: ({ image }: SchemaContext) => projectArticleSchema({ image }),
});

const webArticles = defineCollection({
  loader: computerExperienceLoader("web"),
  schema: ({ image }: SchemaContext) => projectArticleSchema({ image }),
});

const softwarebArticles = defineCollection({
  loader: computerExperienceLoader("software"),
  schema: ({ image }: SchemaContext) => projectArticleSchema({ image }),
});

export const collections = {
  articles,
  experiences,
  gameArticles,
  mobileArticles,
  webArticles,
  softwarebArticles,
};
