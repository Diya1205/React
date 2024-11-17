import React from 'react';

function FruitList() {
  const fruits = ['apple', 'banana', 'orange'];

  return (
    <ul>
      {fruits.map(fruit => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
}

export default FruitList;