import PagePreview from '../../components/PagePreview/pagePreview'
import MintImg from '/assets/mint-big.png'
import './previewSection.css'

function PreviewSection() {
  return (
    <section className="preview-section">
        <PagePreview routePath="" backgroundPath={MintImg}>
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
        <PagePreview routePath="" backgroundPath={MintImg}>
          <h2>Game Development</h2>
          <ul>
            <li>Godot</li>
            <li>Unity</li>
          </ul>
        </PagePreview>
        <PagePreview routePath="" backgroundPath={MintImg}>
          <h2>Software Development</h2>
          <ul>
            <li>C/C++, C#, Java</li>
            <li>OpenGL</li>
            <li>MySQL</li>
          </ul>
        </PagePreview>
        <PagePreview routePath="" backgroundPath={MintImg}>
          <h2>Artistic Skills</h2>
          <ul>
            <li>Used Krita</li>
            <li>Basic understanding in 3D Modelling</li>
            <li>Used Blender</li>
            <li>Basic understanding in Illustrations</li>
          </ul>
        </PagePreview>
    </section>
  )
}

export default PreviewSection