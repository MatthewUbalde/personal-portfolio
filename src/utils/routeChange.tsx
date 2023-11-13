import { useNavigate } from "react-router-dom";

export const RouteChange = (routePath: string) => {
  const navigate = useNavigate();
  const path: string = "/personal-portfolio/" + routePath;
  navigate(path);
}
