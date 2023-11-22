import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import LandingPage from "./pages/Landing/landingPage.tsx";
import WebPage from "./pages/Web/webPage.tsx";
import GamePage from "./pages/Game/gamePage.tsx";
import SoftwarePage from "./pages/Software/softwarePage.tsx";
// import PageCardSection from "./sections/PageCardSection/pageCardSection.tsx";

const router = createBrowserRouter([
  {
    path: "/personal-portfolio/",
    element: <LandingPage/>,
  },
  {
    path: "/personal-portfolio/web",
    element: <React.Suspense><WebPage/></React.Suspense>,
  },
  {
    path: "/personal-portfolio/game",
    element: <React.Suspense><GamePage/></React.Suspense>,
  },
  {
    path: "/personal-portfolio/software",
    element: <React.Suspense><SoftwarePage/></React.Suspense>,
  },
  // {
  //   path: "art",
  //   element: <ArtPage/>,
  // },
]);

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<LandingPage />} />
    //     <Route path="/web" element={<WebPage />} />
    //     <Route path="/game" element={<GamePage />} />
    //     <Route path="/software" element={<SoftwarePage />} />
    //   </Routes>
    //   <PageCardSection/>
    // </Router>
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>}/>
  );
}

export default App;
