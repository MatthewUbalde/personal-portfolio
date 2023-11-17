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
      <Navbar sections={["Intro", "Socials", "Experiences", "Projects"]} />

      <TextSection id='warning'>
        <h1>This section of the site is still in working in progress!</h1>
      </TextSection>

      <PageCardSection id='others'/>
    </div>
  );
}

export default GamePage