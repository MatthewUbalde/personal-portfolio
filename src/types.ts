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

<<<<<<< HEAD
export type ExperienceBadgeType = {
  title: string;
  src: string;
=======
export type ResumeItemType = {
  name: string;
  company: string;
  location: string;
  dateStarted?: Date | null | undefined;
  dateEnded?: Date | null | undefined;
  dateExpected?: Date | null | undefined;
  link?: string | null | undefined;
  descriptions: string[];
};

export type ExperienceBadgeType = {
  name: string;
  svg: string;
>>>>>>> personal-portfolio/master
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
