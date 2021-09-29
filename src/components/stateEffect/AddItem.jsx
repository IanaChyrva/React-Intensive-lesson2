import React, { useState, useEffect } from 'react';

const AddItem = () => {
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    if (!value) return;
    setItems([...items, { value, id: +Date.now() }]);
    setValue('');
  };

  useEffect(() => {
    const raw = localStorage.getItem('items') || [];
    setItems(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <div className='main'>
      <div>
        <input
          type='text'
          placeholder='add item'
          onChange={handleChange}
          value={value}
        />
        <button onClick={handleClick}>Add item</button>
        <div>
          {items.map((item) => {
            return <div key={item.id}>{item.value}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default AddItem;
