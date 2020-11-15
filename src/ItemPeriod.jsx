import React from 'react';
import ContentEditable from "react-contenteditable";

import calendarVector from './vectors/calendar.svg';

export const ItemPeriod = ({ period, onChange }) => {
  return (
    <div className='period-wrapper'>
      <div className='period-vector-wrapper'>
        <div className='period-vector-inner-wrapper'>
          <img className='period-vector' src={calendarVector} alt='calendar picker icon' />
        </div>
      </div>
      <ContentEditable
        className='period-span no-focus'
        html={ period }
        disabled={ false }
        onChange={ onChange }
      />
    </div>
  )
}