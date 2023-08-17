import { useState } from 'react';
import './App.css';
import ShoppingList from './components/ShoppingList';
import Item from './models/item';
import ShoppingListForm from './components/ShoppingListForm';
import { v4 as getId } from "uuid";

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const AddItem = (product: string, quantity: number) => {
    setItems([...items, {id: getId(), product, quantity}])
    
    
  }
//   const items = [
//     {id: 1, product: "Lemon", quantity: 3},
//     {id: 2, product: "Chicken", quantity: 2},
// ]

  return (
    <div className="m">
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={AddItem} />
    </div>
  );
}

export default App;
