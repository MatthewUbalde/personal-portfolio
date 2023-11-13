import { useNavigate, NavigateFunction } from "react-router-dom";
import "./switchContentBtn.css";

interface Props {
  whereTo: 'dev' | 'art';
  sectionName?: "dev" | "art";
}

function sectionMsg(type: string | undefined) {
  if (type === "dev") return "Programming Section";
  else if (type === "art") return "Artistic Section";
  else return '';
}

function SwitchContentBtn({ whereTo, sectionName }: Props) {
  const navigate: NavigateFunction = useNavigate();

  const routeChange = () => {
    const path: string = "/personal-portfolio/" + whereTo;
    navigate(path);
  };

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
