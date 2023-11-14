import { ReactNode } from 'react'
import './textArea.css'

interface Props {
    children: ReactNode;
    id?: string;
    title?: string;
    position?: 'top' | 'middle' | 'bottom';
    align?: 'left' | 'right' | 'center';
    color?: 'default' | 'dark' | 'light';
    size?: 'small' | 'medium' | 'large';
}

function TextArea({id, children, title, position, align, size}: Props) {
  return (
    <div id={id} className={'textarea textarea-' + position + ' textarea-' + align + ' textarea-' + size + (title ? '' : ' textarea-no-title')}>
        <div className={'text-' + align}>
          {title && <h1>{title}</h1>}
          {children}
        </div>
    </div>
  )
}

export default TextArea