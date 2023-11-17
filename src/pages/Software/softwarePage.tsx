import Navbar from "../../components/Navbar/navbar";
import SpotlightSection from "../../components/SpotlightSection/spotlightSection";
import GallerySection from "../../components/Gallery/gallerySection";
import TextSection from "../../components/TextSection/textSection";
import PageCardSection from '../../sections/PageCardSection/pageCardSection'

import SoftwareExpThumbnails from '../../data/thumbnails/softwareExp.json'
import SocialThumbnails from "../../data/thumbnails/socials.json";
import PortraitImg from '/assets/portfolio-portrait.webp'
import "../page.css";
import { useEffect } from "react";

function SoftwarePage() {
  const softwareExpThumbnails: Array<ThumbnailData> = SoftwareExpThumbnails.software
  const socialThumbnails: Array<ThumbnailData> = SocialThumbnails.thumbnails

  // Set scroll to the very top!
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div id="web-page" className="page">
      <Navbar sections={["Intro", "Socials", "Experiences", "Projects"]} />

      <SpotlightSection
        id="intro"
        backgroundImgPath={PortraitImg}
        backgroundImgAlt="Picture of Matthew Ubalde"
      >
        <h1>Matthew Ubalde</h1>
        <p>
          I have used and created applications in <b>C++</b> and <b>Java</b> throughout my time in Fanshawe's Computer Programming and Analysis program.
        </p>
        <p><b>Currently looking for an intership!</b></p>
      </SpotlightSection>

      <section id="socials">
        <h2>My Soical Accounts</h2>
        <GallerySection src={socialThumbnails} type="logo" />
      </section>

      <section id="experiences">
        <h2>Software</h2>
        <GallerySection src={softwareExpThumbnails} type="logo" />
      </section>

      <TextSection id='projects' position='middle' align='center'>
        <h1>Projects</h1>
        <p>No worthy projects to be shown just yet!</p>
      </TextSection>

      {/* <GallerySection id="examples" thumbnails={websiteData}>
        <div className="gallery-text-container">
          <h2>Here are applications (or websites) I have created so far in React</h2>
        </div>
      </GallerySection> */}

      {/* <section id="contacts">
        <h2>Contact Me</h2>
        <ContactForm/>
      </section> */}

      <PageCardSection id='others'/>
    </div>
  );
}

export default SoftwarePage