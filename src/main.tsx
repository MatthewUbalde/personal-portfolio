import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Banner from './components/Banner/banner.tsx'
import LandingPage from './pages/Landing/landingPage.tsx'
import WebPage from './pages/Web/webPage.tsx'
import ArtPage from './pages/Art/artPage.tsx'
import GamePage from './pages/Game/gamePage.tsx'
import SoftwarePage from './pages/Software/softwarePage.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/personal-portfolio/",
    element: <LandingPage/>,
  },
  {
    path: "/personal-portfolio/web",
    element: <WebPage/>,
  },
  {
    path: "/personal-portfolio/game",
    element: <GamePage/>,
  },
  {
    path: "/personal-portfolio/software",
    element: <SoftwarePage/>,
  },
  {
    path: "/personal-portfolio/art",
    element: <ArtPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <Banner status="construction" />
  </React.StrictMode>,
)
