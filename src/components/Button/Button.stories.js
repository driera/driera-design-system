import React from 'react'
import Button from './Button';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, text, radios } from '@storybook/addon-knobs';
import '../../styles/styles.scss';

export default {
  title: 'Button',
  decorators: [withKnobs]
}

export const AllButtons = () => (
  <>
    <div className="story-block">
      <h1>Regular Button: </h1>
      <Button text="Regular button" onClick={action('Regular button action click')} />
    </div>
    <div className="story-block">
      <h1>Ratio: </h1>
      <Button text="Regular button" onClick={action('Regular button action click')} />
      <Button text="Square" ratio="square" onClick={action('square button action click')} />
      <Button text="3D" ratio="square" onClick={action('square button action click')} />
    </div>
    <div className="story-block">
      <h1>Sizes: </h1>
      <Button text="Regular button" onClick={action('Regular button action click')} />
      <Button text="BIG button" size="big" onClick={action('BIG button action click')} />
    </div>
    <div className="story-block">
      <h1>Colors: </h1>
      <Button text="Regular button" onClick={action('Regular button action click')} />
      <Button text="Warning Button" color="warning" onClick={action('Warning button action click')} />
      <Button text="Alert Button" color="alert" onClick={action('Alert button action click')} />
    </div>
  </>
)

export const Customizable = () => (
  <Button 
    text={text('Text', 'Knob Button')} 
    color={select('Select color',['primary', 'warning', 'alert'], 'primary')}
    size={radios('Size', {Regular: '', Big: 'big'}, '')}
    ratio={radios('Ratio', {Regular: '', Square: 'square'},'')}
  />
)
