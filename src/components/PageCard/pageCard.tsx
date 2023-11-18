import React from "react";
import { ReactNode } from "react";
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
  function routeChange() {
    const path: string = "/personal-portfolio/" + routePath;
    navigate(path);
  }
  
  if (!routePath || isCurrent) return <></>;
  
  return (
    <div onClick={routeChange} className="page-preview">
      <div className="page-preview-body">{children}</div>
      <img className="page-preview-bg" src={bgImgPath} alt={bgImgAlt} />
    </div>
  );
}

export default PagePreview;
