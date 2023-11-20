import PageCard from "../../components/PageCard/pageCard";
import WebImg from "/assets/web-dev-pic.jpg";
import SoftwareImg from '/assets/software-dev-pic.jpg';
import GameImg from '/assets/game-dev-pic.jpg';
import "./pageCardSection.css";

import { useLocation } from 'react-router-dom'

interface Props {
  id?: string;
}

function PreviewSection({ id }: Props) {
  const location = useLocation();
  return (
    <section id={id} className="preview-section">
      <h1>Check it out!</h1>
      <div className="page-previews-container">
        <PageCard
          routePath="web"
          bgImgPath={WebImg}
          bgImgAlt="Web Development Background"
          isCurrent={location.pathname.includes('web')}
        >
          <h2>Web Dev</h2>
          <h3>Frontend</h3>
          <ul>
            <li>Vue</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
          <h3>Backend</h3>
          <ul>
            <li>ASP.NET with C#</li>
            <li>MySQL</li>
          </ul>
        </PageCard>
        <PageCard
          routePath="software"
          bgImgPath={SoftwareImg}
          bgImgAlt="Software Development Background"
          isCurrent={location.pathname.includes('software')}
        >
          <h2>Software Dev</h2>
          <ul>
            <li>C/C++, C#, Java</li>
            <li>OpenGL</li>
            <li>MySQL</li>
          </ul>
        </PageCard>
        <PageCard
          routePath="game"
          bgImgPath={GameImg}
          bgImgAlt="Game Development Background"
          isCurrent={location.pathname.includes('game')}
        >
          <h2>Game Dev</h2>
          <ul>
            <li>Godot</li>
            <li>Unity</li>
          </ul>
        </PageCard>
        {/* <PageCard
          routePath=""
          bgImgAlt=""
          isCurrent={location.pathname.includes('art')}
        >
          <h2>Artistic Skills</h2>
          <ul>
            <li>Used Krita at a Intermiedate Level</li>
            <li>Used Blender at a Basic Level</li>
          </ul>
        </PageCard> */}
      </div>
    </section>
  );
}

export default PreviewSection;
