import React from 'react';
import { Item } from './Item';

export const ListItems = (({ items, onItemClicked, addNewItem, deleteItem }) => {
  return (
    items.map((item) =>
      <Item
        key={ item.id }
        itemData={ item }
        addNewItem={ addNewItem }
        deleteItem={ deleteItem }
        onItemClicked={ onItemClicked }
      />
    )
  );
})