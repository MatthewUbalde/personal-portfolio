import type { ImageMetadata } from "astro";

export type ImageLinkType = {
  src: Promise<{ default: ImageMetadata }> | ImageMetadata;
  alt?: string;
};

export type ProjectShowcaseType = {
  title: string;
  description: string;
  coverImage: Promise<{ default: ImageMetadata }> | ImageMetadata;
  coverImageAlt: string;
  href: string;
  published: Date;
  itchioLink?: string;
  steamLink?: string;
  githubLink?: string;
};

export type ExperienceBadgeType = {
  title: string;
  src: string;
  experience: "Learning" | "Beginner" | "Adequate" | "Intermediate" | "Expert";
};

export type NavLinkType = {
  href: string;
  label: string;
  children?: NavLinkType[];
};

export type MalleableComponentType = {
  noPadding?: boolean | undefined;
  noMargin?: boolean | undefined;
  noRounded?: boolean | undefined;
};

export type ContentComponentType = {
  textContent?: boolean | undefined;
  articleContent?: boolean | undefined;
};

export type FlexComponentType = {
  col?: boolean;
  row?: boolean;
};

export type MediaQueryComponentType = {
  noMedia?: boolean | undefined;
};
