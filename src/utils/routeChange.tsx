import { redirect } from "react-router-dom";

export const routeChange = (routePath: string) => {
  const path: string = "/personal-portfolio/" ;+ routePath;
  redirect(path);
}
