import {BrowserRouter, Route, Routes} from 'react-router-dom'

import LandingPage from "./pages/Landing/landingPage.tsx";
import WebPage from "./pages/Web/webPage.tsx";
import GamePage from "./pages/Game/gamePage.tsx";
import SoftwarePage from "./pages/Software/softwarePage.tsx";
import PageCardSection from "./sections/PageCardSection/pageCardSection.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/personal-portfolio/" element={<LandingPage />} />
        <Route path="/personal-portfolio/web" element={<WebPage />} />
        <Route path="/personal-portfolio/game" element={<GamePage />} />
        <Route path="/personal-portfolio/software" element={<SoftwarePage />} />
      </Routes>
      <PageCardSection/>
    </BrowserRouter>
  );
}

export default App;
