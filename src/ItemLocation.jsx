import React from 'react';
import ContentEditable from "react-contenteditable";

import locationPinVector from './vectors/pin.svg';
import locationCircleVector from './vectors/circle.svg';

export const ItemLocation = ({ location, onChange }) => {
  return (
    <div className='location-wrapper'>
      <div className='location-vector-wrapper'>
        <div className='location-vector-inner-wrapper'>
          <img className='location-pin-vector' src={locationPinVector} alt='location icon' />
          <img className='location-circle-vector' src={locationCircleVector} alt='location icon' />
        </div>
      </div>
      <ContentEditable
        className='location-name no-focus'
        html={ location }
        disabled={ false }
        onChange={ onChange }
      />
    </div>
  )
}