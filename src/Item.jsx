import React, { useCallback, useState, useEffect } from 'react';
import ContentEditable from "react-contenteditable";

import OutsideAlerter from "./OutsideAlerter";
import { PopUpButton } from './PopUpButton';

import calendarVector from './vectors/calendar.svg';
import locationPinVector from './vectors/pin.svg';
import locationCircleVector from './vectors/circle.svg';

export const Item = ({ itemData, onItemClicked, addNewItem, deleteItem }) => {
  const [itemFocused, setItemFocused] = useState(false)
  const [popupVisible, setPopupVisible] = useState(false);
  const [timeout, setTime] = useState(null);
  const [textToCheck, setTextToCheck] = useState(null);

  const handleTitleChange = useCallback((e) => { itemData.title = e.target.value }, [])
  const handleNameChange = useCallback((e) => { itemData.name = e.target.value }, [])
  const handleLocationChange = useCallback((e) => { itemData.location = e.target.value }, [])
  const handlePeriodChange = useCallback((e) => { itemData.period = e.target.value }, [])
  const handleDescriptionChange = useCallback((e) => {
    itemData.description = e.target.value
    setTextToCheck(e.target.value)
  }, [])

  useEffect(() => {
    if(textToCheck) {
      searchForMistakes(textToCheck)
    }
  }, [textToCheck]);

  const hidePopUp = useCallback(() => {
    setItemFocused(false)
    setPopupVisible(false)
  }, [])

  const showPopUp = useCallback(() => {
    onItemClicked()
    setItemFocused(true)
    setPopupVisible(true)
  }, [])

  return (
    <OutsideAlerter onSelectedOutside={ hidePopUp }>
      <div className={`content ${itemFocused ? 'white-backgroud' : ''}`} onClick={ showPopUp }>
        <PopUpButton
          visible={ popupVisible }
          itemId={ itemData.id }
          addNewItem={ () => addNewItem(itemData.id) }
          deleteItem={ () => deleteItem(itemData.id) }
        />
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
    </OutsideAlerter>
  )

  function searchForMistakes(text) {
    if (timeout) { clearTimeout(timeout); }

    let newTimeout = setTimeout(function() {
      if(text.indexOf("I've done many projects") >= 0) {
        // https://www.computerhope.com/issues/ch001391.htm
        // extract a service to call (with Promise?)
        console.log('wawa')
      } else {
        console.log('mogo')
      }
    }, 1000);

    setTime(newTimeout);
  }
}