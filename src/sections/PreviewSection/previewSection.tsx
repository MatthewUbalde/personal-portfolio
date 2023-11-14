import PagePreview from "../../components/PagePreview/pagePreview";
import MintImg from "/assets/mint-big.png";
import "./previewSection.css";

interface Props {
  id?: string;
}

function PreviewSection({ id }: Props) {
  return (
    <section id={id} className="preview-section">
      <h1>Other Works</h1>
      <div className="page-previews-container">
        <PagePreview
          routePath="web"
          bgImgPath={MintImg}
          bgImgAlt="Web Development Background"
        >
          <h2>Web Development</h2>
          <h3>Frontend</h3>
          <ul>
            <li>ASP.NET with C#</li>
            <li>MySQL</li>
          </ul>
          <h3>Backend</h3>
          <ul>
            <li>Vue</li>
            <li>React</li>
          </ul>
        </PagePreview>
        <PagePreview
          routePath=""
          bgImgPath={MintImg}
          bgImgAlt="Game Development Background"
        >
          <h2>Game Development</h2>
          <ul>
            <li>Godot</li>
            <li>Unity</li>
          </ul>
        </PagePreview>
        <PagePreview
          routePath=""
          bgImgPath={MintImg}
          bgImgAlt="Software Development Background"
        >
          <h2>Software Development</h2>
          <ul>
            <li>C/C++, C#, Java</li>
            <li>OpenGL</li>
            <li>MySQL</li>
          </ul>
        </PagePreview>
        <PagePreview
          routePath=""
          bgImgPath={MintImg}
          bgImgAlt="Artistic Skills Background"
        >
          <h2>Artistic Skills</h2>
          <ul>
            <li>Used Krita at a Intermiedate Level</li>
            <li>Used Blender at a Basic Level</li>
          </ul>
        </PagePreview>
      </div>
    </section>
  );
}

export default PreviewSection;
