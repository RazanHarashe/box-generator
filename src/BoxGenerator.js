import React, { useState } from 'react';
import './BoxGenerator.css';

function BoxGenerator() {
  const [boxes, setBoxes] = useState([]);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color && size) {
      const newBox = { color, size: `${size}px` };
      setBoxes([...boxes, newBox]);
      setColor('');
      setSize('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Color</label>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div>
          <label>Size</label>
          <input
            type="number"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      <div className="box-container">
        {boxes.map((box, index) => (
          <div
            key={index}
            style={{
              backgroundColor: box.color,
              height: box.size,
              width: box.size
            }}
            className="box"
          ></div>
        ))}
      </div>
    </div>
  );
}

export default BoxGenerator;
