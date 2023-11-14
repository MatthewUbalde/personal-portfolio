import Navbar from "../../components/Navbar/navbar";
import GallerySection from "../../components/Gallery/gallerySection";
import TextArea from "../../components/TextArea/textarea";
import SpotlightSection from "../../components/SpotlightSection/spotlightSection";
import PreviewSection from "../../sections/PreviewSection/previewSection";

import WebsiteThumbnails from "../../data/thumbnails/reactApplications.json";
import WebThumbnails from "../../data/thumbnails/webDevExperiences.json";
import MintImg from "/assets/mint-big.png";
import "./webPage.css";

function WebPage() {
  const websiteData: Array<ThumbnailData> = WebsiteThumbnails.thumbnails;
  const frontendThumbnails: Array<ThumbnailData> =
    WebThumbnails.frontendThumbnails;
  const backendThumbnails: Array<ThumbnailData> =
    WebThumbnails.backendThumbnails;

  return (
    <div id="web-page">
      <Navbar
        sections={["Intro", "Experiences", "Examples", "Contacts"]}
        sectionType="dev"
        sectionSwitchTo="art"
      />

      <SpotlightSection
        id="intro"
        backgroundImgPath={MintImg}
        backgroundImgAlt="Picture of Mint"
      >
        <h1>Matthew Ubalde</h1>
        <p>
          I'm a student at Fanshawe's College, Computer Programming and
          Analysis program.
        </p>
        <p>
          I have experience in using <b>Vue</b> and <b>React</b> frameworks to
          create websites like this.
        </p>
      </SpotlightSection>

      <section id="experiences">
        <GallerySection thumbnails={frontendThumbnails}>
          <div className="gallery-text-container">
            <h2>Frontend Experience</h2>
          </div>
        </GallerySection>
        <GallerySection thumbnails={backendThumbnails}>
          <div className="gallery-text-container">
            <h2>Backend Experience</h2>
          </div>
        </GallerySection>
      </section>

      <TextArea align="center">
        <h1>This website is created in React</h1>
        <p>
          This is my first website that I've created in React, and here is how
          I've learned so far in creating this website.
        </p>
      </TextArea>

      <GallerySection id="examples" thumbnails={websiteData}>
        <div className="gallery-text-container">
          <h2>Here are applications (or websites) I have created with React</h2>
        </div>
      </GallerySection>

      <section id="contacts">
        <TextArea align="center">
          <h1>You can contact me through here!</h1>
          {/*Insert Contact form*/}
        </TextArea>
      </section>

      <TextArea align="center">
        <h1>You should check out my other works as well!</h1>
      </TextArea>
      <PreviewSection />
    </div>
  );
}

export default WebPage;
