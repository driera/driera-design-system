import React from 'react'
import { storiesOf } from '@storybook/react';
import Button from './Button';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text, radios } from '@storybook/addon-knobs';
import '../../styles/styles.scss';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('square', () => (
      <>
      <Button text="Regular button" onClick={action('Regular button action click')} />
      <Button text="-" ratio="square" onClick={action('square button action click')} />
      <Button text="+" ratio="square" onClick={action('square button action click')} />
      <Button text="3D" ratio="square" onClick={action('square button action click')} />
      </>
  ))
  .add('Size', () => (
    <>
    <Button text="Regular button" onClick={action('Regular button action click')} />
    <Button text="BIG button" size="big" onClick={action('BIG button action click')} />
    </>
  ))
  .add('Color', () => (
    <>
      <Button text="Regular Button" onClick={action('Regular button action click')} />
      <Button text="Warning Button" color="warning" onClick={action('Warning button action click')} />
      <Button text="Alert Button" color="alert" onClick={action('Alert button action click')} />
    </>
  ))
  .add('Customizable', () => (
    <Button 
      text={text(
        'Text',
        `Knob Button`
      )} 
      color={select(
        'Select color',
        ['primary', 'warning', 'alert'], 
        'primary'
      )}
      size={radios(
        'Size', 
        {
          Regular: '', 
          Big: 'big'
        }, 
        ''
      )}
      ratio={radios(
        'Ratio', 
        {
          Regular: '',
          Square: 'square'
        },
        ''
      )}
    />
  ))
