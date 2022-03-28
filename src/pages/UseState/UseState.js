import React, { useState } from 'react';


const UseState = () => {
  const [count, setCount] = useState(0);
  return <div>Contador: {count}<br/>
    <button onClick={() => setCount(count + 1)}>
      sumar
    </button>
  </div>;
};

export default UseState;
