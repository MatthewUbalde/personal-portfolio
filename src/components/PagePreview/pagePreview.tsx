import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import "./pagePreview.css";

interface Props {
  children?: ReactNode;
  routePath?: string;
  backgroundPath: string;
}

function PagePreview({ children, routePath, backgroundPath }: Props) {
  if (!routePath) return <></>;

  return (
    <div
      onClick={() => {
        const navigate = useNavigate();
        const path: string = "/personal-portfolio/" + routePath;
        navigate(path);
      }}
      className="page-preview"
    >
      <div className="page-preview-placeholder">
        <div className="page-preview-container">{children}</div>
      </div>
      <div
        className="page-preview-bg"
        style={{ backgroundImage: `url(${backgroundPath})` }}
      />
    </div>
  );
}

export default PagePreview;
