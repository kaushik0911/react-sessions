import { useState } from 'react';

function StateInFunction() {
  // value(noune), setValue(verb)
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>The count [functional] is : {count}</h1>
      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={decreaseCount}>Decrease Count</button>
    </div>
  )
}

export default StateInFunction;