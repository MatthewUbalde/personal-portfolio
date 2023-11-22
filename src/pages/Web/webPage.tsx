import Navbar from "../../components/Navbar/navbar";
import Gallery from "../../components/Gallery/gallery";
import TextContainer from "../../components/TextContainer/textContainer";
import SpotlightContainer from "../../components/SpotlightContainer/spotlightContainer";
import PageCardSection from '../../sections/PageCardSection/pageCardSection'
import ContactForm from "../../components/ContactForm/contactForm";

// import WebsiteThumbnails from "../../data/thumbnails/reactApplications.json";
import SocialThumbnails from "../../data/thumbnails/devSocials.json";
import WebThumbnails from "../../data/thumbnails/webExp.json";
import PortraitImg from '/assets/portfolio-portrait.webp';
import "./webPage.css";
import { useEffect } from "react";

function WebPage() {
  const frontendThumbnails: Array<ThumbnailData> =
    WebThumbnails.frontendData;
  const backendThumbnails: Array<ThumbnailData> =
    WebThumbnails.backendData;
  const socialThumbnails: Array<ThumbnailData> = SocialThumbnails.data;

  // Set scroll to the very top!
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div id="web-page" className="page">
      <Navbar sections={["Intro", "Socials", "Experiences", "Projects", "Contacts", "Others"]} />

      <SpotlightContainer
        id="intro"
        backgroundImgPath={PortraitImg}
        backgroundImgAlt="Picture of Matthew Ubalde"
      >
        <h1>Matthew Ubalde</h1>
        <p>
          I have some experiences using <b>Vue</b> and <b>React</b>{" "}
          frameworks to create websites like this.
        </p>
        <p>
          I'm a student at Fanshawe's College, Computer Programming and Analysis
          program.
        </p>
        <p><b>Currently looking for an intership!</b></p>
      </SpotlightContainer>

      <section id="socials">
        <h2>My Soical Accounts</h2>
        <Gallery src={socialThumbnails} type="logo" />
      </section>

      <section id="experiences">
        <h2>Frontend</h2>
        <Gallery src={frontendThumbnails} type="logo" />
        <h2>Backend</h2>
        <Gallery src={backendThumbnails} type="logo" />
      </section>

      <TextContainer position="middle" align="center">
        <h1>This website is created in React</h1>
        <p>
          And I'll always learn and strive for perfection as I grow deeper as a
          web developer.
        </p>
      </TextContainer>

      <TextContainer id='projects' position='middle' align='center'>
        <h1>Projects</h1>
        <p>No worthy projects to be shown just yet!</p>
      </TextContainer>

      {/* <Gallery id="examples" thumbnails={websiteData}>
        <div className="gallery-text-container">
          <h2>Here are applications (or websites) I have created so far in React</h2>
        </div>
      </Gallery> */}

      <ContactForm/>
      <PageCardSection id='others'/>
    </div>
  );
}

export default WebPage;
