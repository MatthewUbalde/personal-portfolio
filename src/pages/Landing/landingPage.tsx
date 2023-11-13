import Banner from "../../components/Banner/banner";
import SpotlightSection from "../../components/SpotlightSection/spotlightSection";
import MintImg from '/assets/mint-big.png'
import "./landingPage.css";
import PreviewSection from "../../sections/PreviewSection/previewSection";

function App() {
  return (
    <div className="App">
      <SpotlightSection backgroundImgPath={MintImg} backgroundImgAlt="Big picture of me">
        <h1>Matthew Ubalde</h1>
        <p>I'm a programmer with some experience in Web, Software, and Game Development. Constantly learning new things.</p>
        <p>I also been exploring in practicing drawing illustrations, 3D Modelling as a hobby.</p>
        <p>Feel free to check both of them!</p>
      </SpotlightSection>
      <PreviewSection/>
      <Banner status="construction" />
    </div>
  );
}

export default App;
