import Banner from "../../components/Banner/banner";
import Navbar from "../../components/Navbar/navbar";
import TextSection from "../../components/TextSection/textSection";
import PageCardSection from '../../sections/PageCardSection/pageCardSection'

import "../page.css";
import { useEffect } from "react";

function GamePage() {
  // Set scroll to the very top!
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div id="game-page" className="page">
      <Navbar sections={[]} />

      <TextSection id='warning'>
        <h1>This section will showcase some of my game development skills!</h1>
      </TextSection>

      <PageCardSection id='others'/>
      <Banner status="warning" />
    </div>
  );
}

export default GamePage