import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import "./pagePreview.css";

interface Props {
  children?: ReactNode;
  routePath?: string;
  backgroundPath: string;
}

function PagePreview({ children, routePath, backgroundPath }: Props) {
  const navigate = useNavigate();
  const routeChange = () => {
    const path: string = "/personal-portfolio/" + routePath;
    navigate(path);
  }

  return (
    <div onClick={routeChange} className="page-preview">
      <div className="page-preview-placeholder">
        <div className="page-preview-container">
          {!routePath && <h3>Not available!!</h3>}
          {children}
        </div>
      </div>
      <div
        className={"page-preview-bg " + (routePath ? '' : "page-preview-construction")}
        style={{ backgroundImage: `url(${backgroundPath})` }}
      />
    </div>
  );
}

export default PagePreview;
