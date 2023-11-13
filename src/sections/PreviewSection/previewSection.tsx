import PagePreview from '../../components/PagePreview/pagePreview'
import MintImg from '/assets/mint-big.png'
import './previewSection.css'

function PreviewSection() {
  return (
    <section className="preview-section">
        <PagePreview pageHref="dev" backgroundPath={MintImg}>
          <h2>Web Development</h2>
          <ul>
            <li>C/C++, C#, Java</li>
            <li>OpenGL</li>
            <li>Vue React</li>
            <li>MySQL</li>
          </ul>
        </PagePreview>
        <PagePreview pageHref="art" backgroundPath={MintImg}>
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