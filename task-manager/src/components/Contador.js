import React, { useState } from "react";

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => count > 0 && setCount(count - 1)}>-1</button>
    </div>
  );
}

export default Contador;
