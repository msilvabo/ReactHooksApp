import { useEffect } from "react";

export const ShowIncrement = ({increment}) => {

    console.log('Me volvi a dibujar....');
    
    return (
    <button 
        className="btn btn-primary"
        onClick={() => { increment(5);}}
    >
        Increment
    </button>
  );
};
