import Banner from "../../components/Banner/banner";
import Navbar from "../../components/Navbar/navbar";
import TextContainer from "../../components/TextContainer/textContainer";
import PageCardSection from '../../sections/PageCardSection/pageCardSection'
import ContactForm from "../../components/ContactForm/contactForm";

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

      <TextContainer id='warning'>
        <h1>This section will showcase some of my game development skills!</h1>
      </TextContainer>

      <section id="contacts">
        <h2>Contact Me</h2>
        <ContactForm/>
      </section>
      
      <PageCardSection id='others'/>
      <Banner status="warning" />
    </div>
  );
}

export default GamePage