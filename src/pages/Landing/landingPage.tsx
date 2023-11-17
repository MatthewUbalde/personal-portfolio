import SpotlightSection from "../../components/SpotlightSection/spotlightSection";
import PageCardSection from "../../sections/PageCardSection/pageCardSection";
import PotraitImg from '/assets/portfolio-portrait.webp'
import "./landingPage.css";
import "../page.css";

function LandingPage() {
  // Set scroll to the very top!
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="landing-page">
      <SpotlightSection backgroundImgPath={PotraitImg} backgroundImgAlt="Big picture of me">
        <h1>Matthew Ubalde</h1>
        <p>I'm a programmer with some experience in Web, Software, and Game Development. Constantly learning new things.</p>
        <p>I also been exploring in practicing drawing illustrations, 3D Modelling as a hobby.</p>
        <p>Feel free to check both of them!</p>
      </SpotlightSection>
      <PageCardSection/>
    </div>
  );
}

export default LandingPage;
