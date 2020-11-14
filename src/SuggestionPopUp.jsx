import React from 'react';
import groupVector from './vectors/group.svg';

export const SuggestionPopUp = ({ message }) => {
  return (
    <div className='suggestion-popup-wrapper'>
      <div className='suggestion-popup-overlay'>
        <div className='suggestion-popup-inner-content'>
          <span className='suggestion-popup-text'>
          { message }
          </span>

          <div className='suggestion-popup-inner-top'>
            <div className='popup-top-right-wrapper'>
              <div className='popup-top-right'>
                <span className='popup-top-right-text'>Ignore</span>
                <div className='checkbox-wrapper'>
                  <div className='checkbox'></div>
                </div>
              </div>
            </div>  
            <div className='popup-top-left-wrapper'>
              <span className='popup-top-left-text'>Content Improvement</span>
              <div className='popup-top-left-icon-wrapper'>
                <img className='group-vector' src={ groupVector } alt='group icon' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='square'></div>
    </div>
  )
}