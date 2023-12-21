import { Link } from "react-scroll";
import "../Navbar/navbar.css";

interface Props {
  sections?: Array<string>;
}

function Navbar({sections }: Props) {
  return (
    <nav>
      <div className="desktopMenu">
        {sections?.map((value, index) => (
          <Link
            key={index}
            className="link"
            activeClass="link-active"
            smooth
            offset={-225}
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
