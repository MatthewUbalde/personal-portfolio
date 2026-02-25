import type { NavLinkType } from "./types";

/**
 * Holds the Navigation tree that the user can follow
 */
const SITE_ROOT: string = "/";
export const SITE_NAVIGATION: Array<NavLinkType> = [
  {
    href: `${SITE_ROOT}/`,
    label: "Home",
  },
  {
    href: `${SITE_ROOT}/career`,
    label: "Career",
    children: [
      {
        href: "/web",
        label: "Web",
      },
      {
        href: "/software",
        label: "Software",
      },
      {
        href: "/mobile",
        label: "Mobile",
      },
      {
        href: "/game",
        label: "Game",
      },
      {
        href: "/art",
        label: "Art",
      },
    ],
  },
  {
    href: `${SITE_ROOT}/projects`,
    label: "Projects",
  },
];

/**
 * All of the social links that directly points to me
 */
export const SOCIAL_MEDIA_LINKS = {
  github: "https://github.com/MatthewUbalde",
  linkedin: "https://www.linkedin.com/in/matthew-ubalde-171918252/",
};
