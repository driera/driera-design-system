import React from 'react'
import './Button.css';

type ButtonProps = {
  text: string;
  ratio?: string;
  size?: string;
  color?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Button = ({text, ratio, size, color, ...props} : ButtonProps) : JSX.Element => {
  const ratioClass = ratio && ratio.length > 0 ? `button--${ratio}` : '';
  const sizeClass = size && size.length > 0 ? `button--${size}` : '';
  let colorClass = color && color.length > 0 ? `button--${color}` : '';
  
  const classCollection = `button--main ${sizeClass} ${ratioClass} ${colorClass}`;

  return (
    <button className={classCollection} {...props}>
      {text}
    </button>
  )
}

export default Button;
