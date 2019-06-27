import React, { useState } from 'react';
import Filters from './Filters';
import NewItem from './NewItem';
import ShoppingList from './ShoppingList';

const App = () => {

  const initialItems = [
    {
      category: "meat",
      quantity: 3,
      name: "Steaks"
    },
    {
      category: "prod",
      quantity: 4,
      name: "Apples"
    },
    {
      category: "dairy",
      quantity: 1,
      name: "Milk (1L, 2%)"
    },
    {
      category: "bakery",
      quantity: 2,
      name: "Baguettes"
    },
    {
      category: "bakery",
      quantity: 1,
      name: "Dougnut"
    },
  ]

  const [items, setItems] = useState(initialItems)

  const incrementItemQuantity = (index) => {
    const updatedItems = items.map((item, i) => {
      if (i === index) {
        item.quantity++;
      }

      return item;
    });

    setItems(updatedItems);
  };

  const decrementItemQuantity = (index) => {
    const updatedItems = items.map((item, i) => {
      if (i === index && item.quantity > 0) {
        item.quantity--;
      }

      return item;
    });

    setItems(updatedItems);
  };

  return (
    <main className="layout" id="app">
      <header className="header">
        <h1>Grocery List</h1>
      </header>

      <NewItem />
      <Filters />
      <ShoppingList 
        items={items} 
        incrementItem={incrementItemQuantity}
        decrementItem={decrementItemQuantity}
      />
    </main>
  );
};

export default App;