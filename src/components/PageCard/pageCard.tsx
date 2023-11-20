import { ReactNode } from "react";
import { RouteChange } from "../../utils/routeChange";
import { useNavigate } from "react-router-dom";

import "./pageCard.css";

interface Props {
  children?: ReactNode;
  routePath?: string;
  bgImgPath?: string;
  bgImgAlt?: string;
  isCurrent?: boolean;
}

function PagePreview({ children, routePath, bgImgPath, bgImgAlt, isCurrent }: Props) {
  const navigate = useNavigate();

  return !isCurrent && (
    <div onClick={() => {RouteChange(routePath, navigate)}} className="page-preview">
      <div className="page-preview-body">{children}</div>
      <img className="page-preview-bg" src={bgImgPath} alt={bgImgAlt} />
    </div>
  );
}

export default PagePreview;
