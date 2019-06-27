import React from 'react';

const ListItem = ({item, onIncrementClick, onDecrementClick}) => {

  // const updateValue = (newValue) => {
  //   value = newValue;
  //   console.log(`updating with ${newValue}`)
  // };

  // Note: Repeated part put into it's own component
  return (
      <li className={item.category}>
        <button type="button" className="btn up" onClick={ onDecrementClick }>-</button>
        <span>{item.quantity} {item.name}</span>
        <button type="button" className="btn down" onClick={ onIncrementClick }>+</button>
      </li>
    )
}


const ShoppingList = ({items, incrementItem, decrementItem}) => {

    const itemList = items.map((item, i) => { 
      return (
        <ListItem 
        item={item}
        onIncrementClick={() => incrementItem(i)}
        onDecrementClick={() => decrementItem(i)}
        />)
    })

    // Note: Extracted repeated part
    // const itemList = items.map((item) => {
    //   return (
    //     <li className={item.category}>
    //       <button>-</button>
    //       <span>{item.quantity} {item.name}</span>
    //       <button>+</button>
    //     </li>
    //   )
    // })

    return (
      <ul id="shoppingList" className="shoppinglist">
        {itemList}
      </ul>
    );
};
export default ShoppingList;