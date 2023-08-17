import { useRef } from 'react';
import React from 'react'

interface ShoppingListFormProps {
    onAddItem: (item: string, quantity: number) => void
}

const ShoppingListForm = ({onAddItem}: ShoppingListFormProps): JSX.Element => {
  
    const inputRef = useRef<HTMLInputElement>(null);
    const quantityInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // inputRef.current? works together
    const newProduct = inputRef.current!.value;
    const quantity = parseInt(quantityInputRef.current!.value);
    onAddItem(newProduct, quantity)
    inputRef.current!.value = ""
    quantityInputRef.current!.value = ""
    quantityInputRef.current!.value = ""
    
  }

  

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Product Name' ref={inputRef} />
        <input type="number" min={0}  placeholder='Quantity' ref={quantityInputRef} />
        <button type='submit'>Add Item</button>
    </form>
  )
}

export default ShoppingListForm