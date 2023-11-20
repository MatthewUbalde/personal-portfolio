import { NavigateFunction } from "react-router-dom";

export const RouteChange = (routePath: string | undefined, navigateHook: NavigateFunction) => {
  //const navigate = useNavigate();
  if (routePath === undefined)
    return;

  const path: string = "/personal-portfolio/" + routePath;
  navigateHook(path);
}
