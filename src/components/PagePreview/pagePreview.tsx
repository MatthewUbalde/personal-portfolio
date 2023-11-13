import { NavigateFunction, useNavigate } from "react-router-dom";
import { ReactNode } from "react";
import "./pagePreview.css";

interface Props {
  children?: ReactNode;
  pageHref: string;
  backgroundPath: string;
}

function PagePreview({ children, pageHref, backgroundPath }: Props) {
  const navigate: NavigateFunction = useNavigate();

  const routeChange = () => {
    const path: string = "/personal-portfolio/" + pageHref;
    navigate(path);
  };

  return (
    <div onClick={routeChange} className="page-preview">
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
