import { ReactNode } from 'react'
import './textSection.css'

interface Props {
    children: ReactNode;
    id?: string;
    position?: 'top' | 'middle' | 'bottom';
    align?: 'left' | 'right' | 'center';
    color?: 'default' | 'dark' | 'light';
}

function TextSection({id, children, position, align}: Props) {
  return (
    <section id={id} className={'text-element text-element-' + position + ' text-element-' + align}>
        {children}
    </section>
  )
}

export default TextSection