import React, { useState, useCallback } from 'react';
import './App.css';
import { ListItems } from './ListItems';
import { PopUpButton } from './PopUpButton';
import OutsideAlerter from "./OutsideAlerter";
import ItemRecord from "./models/item-record";
import ContentEditable from "react-contenteditable";

const defaultItem = new ItemRecord()

export const App = () => {
  const [title, setTitle] = useState('EXPERIENCE');
  const [blockFocused, setBlockFocused] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [items, setItems] = useState([defaultItem]);
  const [selectedItemId, setSelectedItemId] = useState(defaultItem.id);

  const handleTitleChange = useCallback((e) => {
    setTitle(e.target.value)
  }, [])

  const toggleBackgroundColor = () => {
    setBlockFocused(false)
    setPopupVisible(false)
  }

  const showPopUp = useCallback((itemId) => {
    setSelectedItemId(itemId)
    setBlockFocused(true)
    setPopupVisible(true)
  }, [])

  const addNewItem = useCallback(() => {
    const newItems = [...items]
    newItems.push(new ItemRecord())
    setItems(newItems)
  }, [items])

  const deleteItem = useCallback((itemId) => {
    const newItems = items.filter(item => item.id !== itemId)
    setItems(newItems)
    setPopupVisible(false)
  }, [items])

  return (
    <div className={`body ${blockFocused ? 'gray-background': ''}`}>
      <OutsideAlerter toggleBackgroundColor={ toggleBackgroundColor }>
        <div className='block-wrapper'>
          <PopUpButton
            visible={ popupVisible }
            itemId={ selectedItemId }
            addNewItem={ addNewItem }
            deleteItem={ deleteItem }
          />
          <div className='header'>
            <ContentEditable
              className='header-title no-focus'
              html={ title }
              disabled={ false }
              onChange={ handleTitleChange }
            />
            <div className='header-rect'></div>
          </div>

          <div className='content-wrapper'>
            <ListItems
              items={ items }
              onItemClicked={ showPopUp }
            />
          </div>
        </div>
      </OutsideAlerter>
    </div>
  );
}
