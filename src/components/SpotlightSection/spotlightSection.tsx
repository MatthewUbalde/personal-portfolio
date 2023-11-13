import { ReactNode } from 'react'
import './spotlightSection.css'

interface Props {
  id?: string;
  children: ReactNode
  backgroundImgPath: string;
  backgroundImgAlt: string;
}

function SpotlightSection({id, children, backgroundImgPath, backgroundImgAlt}: Props) {
  return (
    <section id={id} className='spotlight-section'>
      <div className="spotlight-description">
        {children}
      </div>
      <img className="spotlight-background" src={backgroundImgPath} alt={backgroundImgAlt}/>
    </section>
  )
}

export default SpotlightSection