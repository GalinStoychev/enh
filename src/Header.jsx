import React, { useRef } from 'react';
import ContentEditable from "react-contenteditable";

export const Header = () => {
  const title = useRef('EXPERIENCE');
  const handleChange = evt => {
    title.current = evt.target.value;
  }

  return (
    <div className='header'>
      <ContentEditable
        className='header-title no-focus'
        html={ title.current }
        disabled={ false }
        onChange={ handleChange }
      />
      <div className='header-rect'></div>
    </div>
  )
}
