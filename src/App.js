import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const addItem = () => {
    if (newItem.trim() === '') {
      return;
    }

    if (items.includes(newItem)) {
      alert('Item already exists!');
      return;
    }

    if (editIndex === -1) {
      setItems([...items, newItem]);
    } else {
      const updatedItems = [...items];
      updatedItems[editIndex] = newItem;
      setItems(updatedItems);
      setEditIndex(-1);
    }

    setNewItem('');
  };

  const editItem = (index) => {
    setNewItem(items[index]);
    setEditIndex(index);
  };

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <h2>My List of Items</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
           {index + 1}. {item}
            <button onClick={() => editItem(index)}>Edit</button>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={handleInputChange}
          placeholder="Enter a new item"
        />
        <button onClick={addItem}>
          {editIndex === -1 ? 'Add Item' : 'Update Item'}
        </button>
      </div>
    </div>
  );
}
