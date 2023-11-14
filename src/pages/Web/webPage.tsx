import Navbar from "../../components/Navbar/navbar";
import GallerySection from "../../components/Gallery/gallerySection";
import TextSection from "../../components/TextSection/textSection";
import SpotlightSection from "../../components/SpotlightSection/spotlightSection";
import PreviewSection from "../../sections/PreviewSection/previewSection";

import WebsiteThumbnails from "../../data/thumbnails/reactApplications.json";
import WebThumbnails from "../../data/thumbnails/webDevExperiences.json";
import MintImg from "/assets/mint-big.png";
import "./webPage.css";
import "../page.css";
import ContactForm from "../../components/ContactForm/contactForm";

function WebPage() {
  const websiteData: Array<ThumbnailData> = WebsiteThumbnails.thumbnails;
  const frontendThumbnails: Array<ThumbnailData> =
    WebThumbnails.frontendThumbnails;
  const backendThumbnails: Array<ThumbnailData> =
    WebThumbnails.backendThumbnails;

  return (
    <div id="web-page" className="page">
      <Navbar
        sections={["Intro", "Experiences", "Examples", "Contacts", "Others"]}
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
          I have some experiences in using <b>Vue</b> and <b>React</b> frameworks to
          create websites like this.
        </p>
      </SpotlightSection>

      <section id="experiences">
        <h2>Frontend Experience</h2>
        <GallerySection thumbnails={frontendThumbnails}/>
        <h2>Backend Experience</h2>
        <GallerySection thumbnails={backendThumbnails}/>
      </section>

      <TextSection position='middle' align="center">
        <h1>This website is created in React</h1>
        <p>
          And I'll always learn and strive for perfection as I grow deeper as a web developer.
        </p>
      </TextSection>
      <GallerySection id="examples" thumbnails={websiteData}>
        <div className="gallery-text-container">
          <h2>Here are applications (or websites) I have created so far in React</h2>
        </div>
      </GallerySection>

      <section id="contacts">
        <ContactForm/>
      </section>

      <PreviewSection id='others'/>
    </div>
  );
}

export default WebPage;
