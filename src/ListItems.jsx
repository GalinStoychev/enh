import React from 'react';
import { Item } from './Item';

export const ListItems = (({ items, onItemClicked }) => {
  return (
    items.map((item) =>
      <Item
        key={ item.id }
        itemData={ item }
        onItemClicked={ onItemClicked }
      />
    )
  );
})