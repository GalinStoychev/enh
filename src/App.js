import React, { useState, useCallback } from 'react';
import './App.css';
import ContentEditable from "react-contenteditable";
import ItemRecord from "./models/item-record";

import { Item } from './Item';
import OutsideAlerter from "./OutsideAlerter";

const defaultItem = new ItemRecord()

export const App = () => {
  const [title, setTitle] = useState('EXPERIENCE')
  const [blockFocused, setBlockFocused] = useState(false)
  const [items, setItems] = useState([defaultItem])

  const handleTitleChange = useCallback((e) => { setTitle(e.target.value) }, [])

  const addNewItem = useCallback(() => {
    const newItems = [...items]
    newItems.push(new ItemRecord())
    setItems(newItems)
  }, [items])

  const deleteItem = useCallback((itemId) => {
    const newItems = items.filter(item => item.id !== itemId)
    setItems(newItems)
  }, [items])

  return (
    <div className={`body ${blockFocused ? 'gray-background': ''}`}>
      <OutsideAlerter onSelectedOutside={ () => setBlockFocused(false) }>
        <div className='block-wrapper'>
          <div className='header'>
            <ContentEditable
              className='header-title no-focus'
              html={ title }
              disabled={ false }
              onFocus={ () => setBlockFocused(true) }
              onChange={ handleTitleChange }
            />
            <div className='header-rect'></div>
          </div>

          <div className='content-wrapper'>
            {
              items.map((item) =>
                <Item
                  key={ item.id }
                  itemData={ item }
                  addNewItem={ addNewItem }
                  deleteItem={ deleteItem }
                  onItemClicked={ () => setBlockFocused(true) }
                />
              )
            }
          </div>
        </div>
      </OutsideAlerter>
    </div>
  );
}
