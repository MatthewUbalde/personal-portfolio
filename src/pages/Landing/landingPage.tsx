import SpotlightContainer from "../../components/SpotlightContainer/spotlightContainer";
import PageCardSection from "../../sections/PageCardSection/pageCardSection";

import PotraitImg from '/assets/portfolio-portrait.webp'
import "./landingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <SpotlightContainer backgroundImgPath={PotraitImg} backgroundImgAlt="Big picture of me">
        <h1>Matthew Ubalde</h1>
        <p>I'm in <b>Fanshawe's Computer Programming and Analysis program</b> with some experience in Web, Software, and Game Development.</p>
        <p>Highly recommend to check out my expereinces in <b>Web Development</b> first!</p>
      </SpotlightContainer>
      <PageCardSection/>
    </div>
  );
}

export default LandingPage;
