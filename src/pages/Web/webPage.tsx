import Navbar from "../../components/Navbar/navbar";
import GallerySection from "../../components/Gallery/gallerySection";
import TextArea from "../../components/TextArea/textarea";
import SpotlightSection from "../../components/SpotlightSection/spotlightSection";
import PreviewSection from "../../sections/PreviewSection/previewSection";

import Data from "../../data/devPageThumbnails.json";
import WebThumbnails from "../../data/thumbnails/webDevExperiences.json";
import MintImg from "/assets/mint-big.png";
import "./webPage.css";

function WebPage() {
  const thumbnailData: Array<ThumbnailData> = Data.thumbnails;
  const frontendThumbnails: Array<ThumbnailData> = WebThumbnails.frontendThumbnails;

  return (
    <div id="dev-page">
      <Navbar
        sections={["Intro", "Experiences", "Examples", "Contacts"]}
        sectionType="dev"
        sectionSwitchTo="art"
      />

      <SpotlightSection
        id="meet"
        backgroundImgPath={MintImg}
        backgroundImgAlt="Picture of Mint"
      >
        <h1>Web Development</h1>
        <p>
          I have experience in using <b>Vue</b> and <b>React</b> frameworks to
          create websites like this
        </p>
      </SpotlightSection>
      
      <GallerySection id="experiences" thumbnails={frontendThumbnails}>
        <div className="gallery-text-container">
          <h2>Frontend Experience</h2>
          <p>Here are my </p>
        </div>
      </GallerySection>

      <section id="intro">
        <TextArea align="center">
          <h1>This website is created in React</h1>
          <p>
            This is my first website that I've created in React, and here is how I've learned so far in creating this website.
          </p>
        </TextArea>
      </section>

      <GallerySection id="examples" thumbnails={thumbnailData}>
        <h2>The many projects that I've made.</h2>
      </GallerySection>

      <section id="contacts">
        <TextArea align="center">
          <p>My contacts can be found here:</p>
        </TextArea>
      </section>
      <PreviewSection />
    </div>
  );
}

export default WebPage;
