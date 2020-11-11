import React, { useCallback } from 'react';
import ContentEditable from "react-contenteditable";

import calendarVector from './vectors/calendar.svg';
import locationPinVector from './vectors/pin.svg';
import locationCircleVector from './vectors/circle.svg';

export const Item = ({ itemData, onItemClicked }) => {
  const handleTitleChange = useCallback((e) => { itemData.title = e.target.value }, [])
  const handleDescriptionChange = useCallback((e) => { itemData.description = e.target.value }, [])
  const handleNameChange = useCallback((e) => { itemData.name = e.target.value }, [])
  const handleLocationChange = useCallback((e) => { itemData.location = e.target.value }, [])
  const handlePeriodChange = useCallback((e) => { itemData.period = e.target.value }, [])

  return (
    <div className='content' onClick={ () => onItemClicked(itemData.id) }>
      <div className='content-inner'>
        <ContentEditable
          className='content-title no-focus'
          html={ itemData.title }
          disabled={ false }
          onChange={ handleTitleChange }
        />

        <div className='content-meta'>
          <div className='content-meta-inner'>
            <div className='location-period-wrapper'>
              <div className='period-wrapper'>
                <div className='period-vector-wrapper'>
                  <div className='period-vector-inner-wrapper'>
                    <img className='period-vector' src={calendarVector} alt='calendar picker icon' />
                  </div>
                </div>
                <ContentEditable
                className='period-span no-focus'
                html={ itemData.period }
                disabled={ false }
                onChange={ handlePeriodChange }
                />
              </div>

              <div className='location-wrapper'>
                <div className='location-vector-wrapper'>
                  <div className='location-vector-inner-wrapper'>
                    <img className='location-pin-vector' src={locationPinVector} alt='location icon' />
                    <img className='location-circle-vector' src={locationCircleVector} alt='location icon' />
                  </div>
                </div>
                <ContentEditable
                className='location-name no-focus'
                html={ itemData.location }
                disabled={ false }
                onChange={ handleLocationChange }
                />
              </div>
            </div>
            <ContentEditable
            className='content-meta-title no-focus'
            html={ itemData.name }
            disabled={ false }
            onChange={ handleNameChange }
          />
          </div>
        </div>
        <div className='content-description-wrapper'>
          <ContentEditable
            className='content-description-title no-focus'
            html={ itemData.description }
            disabled={ false }
            onChange={ handleDescriptionChange }
          />
        </div>
      </div>
    </div>
  )
}