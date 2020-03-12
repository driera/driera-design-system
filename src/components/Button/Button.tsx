import React from 'react'

type ButtonProps = {
  text: string;
  ratio?: string;
  size?: string;
  color?: string;
  onClick?: any;
}

const Button = ({text, ratio, size, color, ...props} : ButtonProps) : JSX.Element => {
  const ratioClass = ratio === 'square' ? 'button--square' : '';
  const sizeClass = size === 'big' ? 'button--big' : '';
  let colorClass = '';

  if (color === 'alert') {
    colorClass = 'button--alert';
  }
  
  if (color === 'warning') {
    colorClass = 'button--warning';
  }
  
  const classCollection = `button--main ${sizeClass} ${ratioClass} ${colorClass}`;

  return (
    <button className={classCollection} {...props}>
      {text}
    </button>
  )
}

export default Button;
