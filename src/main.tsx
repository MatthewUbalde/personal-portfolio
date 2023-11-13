import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Banner from './components/Banner/banner.tsx'
import Landing from './pages/Landing/landingPage.tsx'
import DevPage from './pages/Dev/devPage.tsx'
import ArtPage from './pages/Art/artPage.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/personal-portfolio/",
    element: <Landing/>,
  },
  {
    path: "/personal-portfolio/art",
    element: <ArtPage/>,
  },
  {
    path: "/personal-portfolio/dev",
    element: <DevPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <Banner status="construction" />
  </React.StrictMode>,
)
