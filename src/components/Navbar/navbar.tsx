import { Link } from "react-scroll";
import SwitchContentBtn from "../SwitchContentBtn/switchContentBtn";
import "../Navbar/navbar.css";

interface Props {
  sectionType: "dev" | "art";
  sectionSwitchTo: "dev" | "art";
  sections?: Array<string>;
}

function Navbar({ sectionType, sectionSwitchTo, sections }: Props) {
  return (
    <nav>
      <div className="seekNavMenu">
        <SwitchContentBtn
          sectionName={sectionType}
          whereTo={sectionSwitchTo}
        />
      </div>
      <div className="desktopMenu">
        {sections?.map((value, index) => (
          <Link
            key={index}
            className="link"
            activeClass="link-active"
            smooth
            offset={-200}
            spy={true}
            to={value.toLowerCase()}
          >
            {value}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
