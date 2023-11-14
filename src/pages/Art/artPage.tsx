import Navbar from "../../components/Navbar/navbar";
import TextArea from "../../components/TextArea/textarea";
import GallerySection from "../../components/Gallery/gallerySection";
import Data from "../../data/devPageThumbnails.json";
import PreviewSection from "../../sections/PreviewSection/previewSection";
import "./artPage.css";
import "../page.css";

function ArtPage() {
  const data: Array<ThumbnailData> = Data.thumbnails;

  return (
    <div id="art-page"className="page">
      <Navbar
        sections={["Intro", "Examples"]}
        sectionType="art"
        sectionSwitchTo="dev"
      />
      <section id="intro">
        <TextArea align="center">
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
        </TextArea>
      </section>

      <GallerySection id="examples" thumbnails={data} />
      <PreviewSection />
    </div>
  );
}

export default ArtPage;
