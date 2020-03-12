import React from 'react'
import styled from 'styled-components';

type ButtonProps = {
  text: string;
  ratio?: string;
  size?: string;
  color?: string;
  onClick?: any;
}

const Button = () : JSX.Element => {
  const StyledButton = styled(Button)`
    min-width: 30px;
    padding: .5em 2.8em;
    margin: .5em;
    border-radius: 5px;
    border: 1px solid var(--primary-color);
    font-size: 12px;
    font-family: var(--secondary-font);
    font-weight: bold;
    color: var(--light-color);
    background: transparent;
    cursor: pointer;
    transition: 0.3s ease-in;
  `


  return (
    <StyledButton>MyButton</StyledButton>
  )
}



export default Button;
