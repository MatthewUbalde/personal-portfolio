import Navbar from "../../components/Navbar/navbar";
import TextContainer from "../../components/TextContainer/textContainer";
// import Gallery from "../../components/Gallery/gallery";
// import Data from "../../data/devPageThumbnails.json";
import PreviewSection from "../../sections/PageCardSection/pageCardSection";
import "./artPage.css";
import "../page.css";

function ArtPage() {
  // const data: Array<ThumbnailData> = Data.thumbnails;

  return (
    <div id="art-page" className="page">
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
      {/* <Gallery id="examples" src={data} /> */}
      <PreviewSection id='others'/>
    </div>
  );
}

export default ArtPage;
