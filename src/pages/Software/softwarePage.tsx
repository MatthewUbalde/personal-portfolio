import Navbar from "../../components/Navbar/navbar";
import SpotlightContainer from "../../components/SpotlightContainer/spotlightContainer";
import Gallery from "../../components/Gallery/gallery";
import TextContainer from "../../components/TextContainer/textContainer";
import PageCardSection from '../../sections/PageCardSection/pageCardSection';
import ContactForm from "../../components/ContactForm/contactForm";

import SoftwareExpThumbnails from '../../data/thumbnails/softwareExp.json'
import SocialThumbnails from "../../data/thumbnails/devSocials.json";
import PortraitImg from '/assets/portfolio-portrait.webp'
import "../page.css";
import { useEffect } from "react";
import Banner from "../../components/Banner/banner";

function SoftwarePage() {
  const softwareExpThumbnails: Array<ThumbnailData> = SoftwareExpThumbnails.data
  const socialThumbnails: Array<ThumbnailData> = SocialThumbnails.data

  // Set scroll to the very top!
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div id="web-page" className="page">
      <Navbar sections={["Intro", "Socials", "Experiences", "Projects", "Others"]} />

      <SpotlightContainer
        id="intro"
        backgroundImgPath={PortraitImg}
        backgroundImgAlt="Picture of Matthew Ubalde"
      >
        <h1>Matthew Ubalde</h1>
        <p>
          I have used and created applications in <b>C++</b> and <b>Java</b> throughout my time in Fanshawe's Computer Programming and Analysis program.
        </p>
        <p><b>Currently looking for an intership!</b></p>
      </SpotlightContainer>

      <section id="socials">
        <h2>My Soical Accounts</h2>
        <Gallery src={socialThumbnails} type="logo" />
      </section>

      <section id="experiences">
        <h2>Software</h2>
        <Gallery src={softwareExpThumbnails} type="logo" />
      </section>

      <TextContainer id='projects' position='middle' align='center'>
        <h1>Projects</h1>
        <p>No worthy projects to be shown just yet!</p>
      </TextContainer>

      {/* <Gallery id="examples" thumbnails={websiteData}>
        <div className="gallery-text-container">
          <h2>Here are applications (or websites) I have created so far in React</h2>
        </div>
      </Gallery> */}

      <section id="contacts">
        <h2>Contact Me</h2>
        <ContactForm/>
      </section>

      <PageCardSection id='others'/>
      <Banner status="warning" />
    </div>
  );
}

export default SoftwarePage