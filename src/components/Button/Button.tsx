import React from 'react'
import './Button.scss';

type ButtonProps = {
  text: string;
  ratio?: string;
  size?: string;
  color?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Button = ({text, ratio, size, color, ...props} : ButtonProps) : JSX.Element => {
  const ratioClass = ratio && ratio.length > 0 ? `v-${ratio}` : '';
  const sizeClass = size && size.length > 0 ? `sz-${size}` : '';
  let colorClass = color && color.length > 0 ? `st-${color}` : '';
  
  const classCollection = `button--main ${sizeClass} ${ratioClass} ${colorClass}`;

  return (
    <button className={classCollection} {...props}>
      {text}
    </button>
  )
}

export default Button;
