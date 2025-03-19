import { useCallback, useEffect, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setcounter] = useState(10);


    const incrementFather = useCallback(
        (value) => {
           setcounter((counter) => counter + value)
    }, []);

    useEffect(() => {

    },[incrementFather])

  return (
    <>
        <div>CallbackHook: {counter}</div>
        <hr />
        <ShowIncrement increment={ incrementFather }/>
    </>
  );
};
