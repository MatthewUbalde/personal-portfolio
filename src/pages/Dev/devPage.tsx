import Banner from "../../components/Banner/banner";
import Navbar from "../../components/Navbar/navbar";
import GallerySection from "../../components/Gallery/gallerySection";
import TextArea from "../../components/TextArea/textarea";

import Data from "../../data/devPageThumbnails.json"
import MintImg from "/assets/mint-big.png"
import "./devPage.css";
import SpotlightSection from "../../components/SpotlightSection/spotlightSection";

function DevPage() {
  const thumbnailData: Array<ThumbnailData> = Data.thumbnails

  return (
    <div id="dev-page">
      <Navbar sections={["Intro", "Examples", "Contacts"]} sectionType='dev' sectionSwitchTo='art'/>
      
      <SpotlightSection id='meet' backgroundImgPath={MintImg} backgroundImgAlt="Picture of Mint">
        <h1>Matthew Ubalde</h1>
        <p>A Programmer experienced in software, web, and game development.</p>   
      </SpotlightSection>
            
      <section id="intro">
        <TextArea align='center'>
            <p>Câline de bine de ciboire de caltor de cibole de christie d'estique de maudite marde de crucifix.</p>
            <p>Crisse de marde de cul de christie d'esprit de saintes fesses de crucifix de viande à chien de calvince de boswell de gériboire. </p>
        </TextArea>
        <span>Lorem Ispum</span>
        <TextArea align="center">
        <p>Câline de bine de ciboire de caltor de cibole de christie d'estique de maudite marde de crucifix.</p>
        </TextArea>
      </section>

      <GallerySection id='examples' thumbnails={thumbnailData}>
        <h2>The many projects that I've made.</h2>
      </GallerySection>

      <section id="contacts">
        <TextArea align='center'>
          <p>My contacts can be found here:</p>
        </TextArea>
      </section>

      <Banner status="construction"/>
    </div>
  );
}

export default DevPage;
