import Banner from "../../components/Banner/banner";
import SpotlightSection from "../../components/SpotlightSection/spotlightSection";
import PagePreview from "../../components/PagePreview/pagePreview";

import MintImg from '/assets/mint-big.png'
import "./landingPage.css";

function App() {
  return (
    <div className="App">
      <SpotlightSection backgroundImgPath={MintImg} backgroundImgAlt="Big picture of me">
        <h1>Matthew Ubalde</h1>
        <p>I'm a programmer with some experience in Web, Software, and Game Development. Constantly learning new things.</p>
        <p>I also been exploring in practicing drawing illustrations, 3D Modelling as a hobby.</p>
        <p>Feel free to check both of them!</p>
      </SpotlightSection>
      <div id="switch-buttons-container">
        <PagePreview pageHref="dev" backgroundPath={MintImg}>
          <h2>Programming Skills</h2>
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
      </div>
      <Banner status="construction" />
    </div>
  );
}

export default App;
