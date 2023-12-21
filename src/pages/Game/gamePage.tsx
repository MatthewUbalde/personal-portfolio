import { useEffect } from "react";

import Banner from "../../components/Banner/banner";
import Navbar from "../../components/Navbar/navbar";
import TextContainer from "../../components/TextContainer/textContainer";
import ContactForm from "../../components/ContactForm/contactForm";

import "./gamePage.css";

function GamePage() {
  // Set scroll to the very top!
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div id="game-page" className="page">
      <Banner status="warning" />
      <Navbar sections={[]} />

      <TextContainer id='warning'>
        <h1>This section will showcase some of my game development skills!</h1>
      </TextContainer>
      <ContactForm/>
    </div>
  );
}

export default GamePage