import React from 'react'
import { storiesOf } from '@storybook/react';
import Button from './Button';
import '../../styles/global.css';

storiesOf('Button', module)
  .add('default', () => <Button text="button text" />)
  .add('square', () => (
      <>
      <Button text="Regular button" onClick={() => alert('it works!!')} />
      <Button text="-" ratio="square" />
      <Button text="+" ratio="square" />
      <Button text="3D" ratio="square" />
      </>
  ))
  .add('Size', () => (
    <>
    <Button text="Regular button" />
    <Button text="BIG button" size="big" />
    </>
  ))
  .add('Color', () => (
    <>
      <Button text="Regular Button" />
      <Button text="Warning Button" color="warning" />
      <Button text="Alert Button" color="alert" />
    </>
  ))
