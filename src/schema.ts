import { z, type SchemaContext } from "astro:content";

const externalLinkSchema = z.string().optional();

export const projectShowcaseSchema = z.object({
  title: z.string(),
  description: z.string(),
  coverImage: z.object({
    src: z.string(),
    href: z.string(),
    alt: z.string(),
  }),
});

export const resumeItemSchema = z.object({
  name: z.string(),
  company: z.string(),
  location: z.string(),
  dateStarted: z.coerce.date().optional().nullable(),
  dateEnded: z.coerce.date().optional().nullable(),
  dateExpected: z.coerce.date().optional().nullable(),
  link: z.string().optional().nullable(),
  descriptions: z.array(z.string().max(160)).default([]),
});

export const experienceBadgeSchema = z.object({
  name: z.string(),
  svg: z.string(),
  experience: z.enum(["Learning", "Beginner", "Intermediate", "Expert"]),
  types: z.array(
    z.enum(["game", "software", "frontend", "backend", "art", "mobile"]),
  ),
});

export const projectArticleSchema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    description: z.string(),
    coverImage: image(),
    coverImageAlt: z.string(),
    summaryPoints: z.string().array().nonempty(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    featured: z.boolean(),
    itchio: externalLinkSchema,
    steam: externalLinkSchema,
    github: externalLinkSchema,
  });
