import Navbar from "../../components/Navbar/navbar";
import GallerySection from "../../components/Gallery/gallerySection";
import TextSection from "../../components/TextSection/textSection";
import SpotlightSection from "../../components/SpotlightSection/spotlightSection";
// import PreviewSection from "../../sections/PreviewSection/previewSection";
// import ContactForm from "../../components/ContactForm/contactForm";

// import WebsiteThumbnails from "../../data/thumbnails/reactApplications.json";
import SocialThumbnails from "../../data/thumbnails/socials.json";
import WebThumbnails from "../../data/thumbnails/webDevExperiences.json";
import PortraitImg from '/assets/portfolio-portrait.webp';
import "./webPage.css";
import "../page.css";

function WebPage() {
  // const websiteData: Array<ThumbnailData> = WebsiteThumbnails.thumbnails;
  const frontendThumbnails: Array<ThumbnailData> =
    WebThumbnails.frontendThumbnails;
  const backendThumbnails: Array<ThumbnailData> =
    WebThumbnails.backendThumbnails;
  const socialThumbnails: Array<ThumbnailData> = SocialThumbnails.thumbnails;

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
          I have some experiences using <b>Vue</b> and <b>React</b>{" "}
          frameworks to create websites like this.
        </p>
        <p>
          I'm a student at Fanshawe's College, Computer Programming and Analysis
          program.
        </p>
        <p><b>Currently looking for an intership!</b></p>
      </SpotlightSection>

      <section id="socials">
        <h2>My Soical Accounts</h2>
        <GallerySection src={socialThumbnails} type="logo" />
      </section>

      <section id="experiences">
        <h2>Frontend</h2>
        <GallerySection src={frontendThumbnails} type="logo" />
        <h2>Backend</h2>
        <GallerySection src={backendThumbnails} type="logo" />
      </section>

      <TextSection position="middle" align="center">
        <h1>This website is created in React</h1>
        <p>
          And I'll always learn and strive for perfection as I grow deeper as a
          web developer.
        </p>
      </TextSection>

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

      {/* <PreviewSection id='others'/> */}
    </div>
  );
}

export default WebPage;
