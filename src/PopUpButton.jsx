import React from 'react';
import trashVector from './vectors/trash.svg';
import plusVector from './vectors/plus.svg';

export const PopUpButton = ({visible, addNewItem, deleteItem, itemId }) => {
  if (!visible) { return '' }

  return (
    <div className='popup-btn-wrapper'>
      <div className='delete-btn-wrapper' onClick={ () => deleteItem(itemId) }>
        <div className='delete-btn-rect'></div>
        <img src={trashVector} alt='delete button' className='delete-btn-icon' />
      </div>

      <div className='add-btn-wrapper'>
        <div className='add-btn-inner-wrapper'>
          <div className='add-btn-icon-wrapper'>
            <img src={plusVector} alt='plus sign' className='add-btn-icon' />
          </div>
          <div className='add-btn-text' onClick={ () => addNewItem() }>New entry</div>
        </div>
      </div>
    </div>
  )
}