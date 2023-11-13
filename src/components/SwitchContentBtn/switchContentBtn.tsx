import { useNavigate } from "react-router-dom";
import "./switchContentBtn.css";

interface Props {
  routePath: 'dev' | 'art';
  sectionName?: "dev" | "art";
}

function sectionMsg(type: string | undefined) {
  if (type === "dev") return "Programming Section";
  else if (type === "art") return "Artistic Section";
  else return '';
}

function SwitchContentBtn({ routePath, sectionName }: Props) {
  const navigate = useNavigate();
  const routeChange = () => {
    const path: string = "/personal-portfolio/" + routePath;
    navigate(path);
  }
  
  return (
    <div className="switch-content">
      {sectionMsg(sectionName)}
      <button onClick={routeChange} className="switch-content-btn">
        Switch
      </button>
    </div>
  );
}

export default SwitchContentBtn;
