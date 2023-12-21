import Navbar from "../../components/Navbar/navbar";
import TextContainer from "../../components/TextContainer/textContainer";
// import Gallery from "../../components/Gallery/gallery";
// import Data from "../../data/devPageThumbnails.json";
import ContactForm from "../../components/ContactForm/contactForm";
import PreviewSection from "../../sections/PageCardSection/pageCardSection";
import "./artPage.css";

function ArtPage() {
  // const data: Array<ThumbnailData> = Data.thumbnails;

  return (
    <div id="art-page" className="page">
        <PreviewSection id='others'/>
      <Navbar sections={["Intro", "Examples", "Other", "Others"]} />
      <TextContainer id="intro" align="center">
        <p>
          Hello everyone! My art portfolio can also be found through{" "}
          <a
            href="https://www.artstation.com/fish_with_headphones"
            rel="noopener"
            target="_blank"
          >
            here!
          </a>
        </p>
        <p>This place is currently in working progress!</p>
      </TextContainer>
      <ContactForm/>
    </div>
  );
}

export default ArtPage;
