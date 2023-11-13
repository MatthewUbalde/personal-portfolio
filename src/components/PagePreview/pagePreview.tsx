import { ReactNode } from "react";
import { routeChange } from "../../utils/routeChange";
import "./pagePreview.css";

interface Props {
  children?: ReactNode;
  pageHref: string;
  backgroundPath: string;
}

function PagePreview({ children, pageHref, backgroundPath }: Props) {
  return (
    <div onClick={() => routeChange(pageHref)} className="page-preview">
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
