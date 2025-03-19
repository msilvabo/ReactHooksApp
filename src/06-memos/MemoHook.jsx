import { useState } from "react";
import { useCounter } from "../hooks";
import { useMemo } from "react";

const heavyStuff = ( iterationNumber = 100 ) => {
  for (let index = 0; index < iterationNumber; index++) {
    console.log('ahi vamos...');
  }
  return `${iterationNumber} done`;
}


export const MemoHook = () => {

  const {counter, increment} = useCounter(4000);
  const [show, setshow] = useState(true);

  const memorizeValue =useMemo( () => heavyStuff(counter), [counter])

  return (
    <>
      <h1>Counter:<small>{counter}</small></h1>
      <h4>{memorizeValue} </h4>

      <button
        className = "btn btn-primary"
        onClick={() => increment()}
        >
          +1
      </button>
      <button
        className = "btn btn-outline-primary"
        onClick={() => setshow(!show)}
      >
        Show/hide {JSON.stringify(show)}
      </button>
    </>
  );
};
