import React, { useEffect, useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(+window.localStorage.getItem("count"));
  useEffect(() => {
    window.localStorage.setItem("count", count);
  }, [count]);
  const increaseCount = () => {
    return setCount(count + 1);
  };
  const decreaseCount = () => {
    return setCount(count - 1);
  };
  return (
    <div>
        <h1> Count {count} </h1>  <button onClick={increaseCount}>+</button> {" "}
      <button onClick={decreaseCount}>-</button> {" "}
    </div>
  );
}