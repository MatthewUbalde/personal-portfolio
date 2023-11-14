import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import "./pagePreview.css";

interface Props {
  children?: ReactNode;
  routePath?: string;
  bgImgPath?: string;
  bgImgAlt?: string;
}

function PagePreview({ children, routePath, bgImgPath, bgImgAlt }: Props) {
  
  const navigate = useNavigate();
  function routeChange() {
    const path: string = "/personal-portfolio/" + routePath;
    navigate(path);
  }
  
  if (!routePath) return <></>;
  
  return (
    <div onClick={routeChange} className="page-preview">
      <div className="page-preview-placeholder">
        <div className="page-preview-container">{children}</div>
      </div>
      <img className="page-preview-bg" src={bgImgPath} alt={bgImgAlt} />
      {/* <div
        className="page-preview-bg"
        style={{ backgroundImage: `url(${backgroundPath})` }}
      /> */}
    </div>
  );
}

export default PagePreview;
