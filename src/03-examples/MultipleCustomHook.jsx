import { useEffect, useState } from "react";
import { useCounter, useFetch, useForm } from "../hooks";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCar } from "./PokemonCar";

export const MultipleCustomHook = () => {

    const {counter, decrement, increment} = useCounter(10);
    const {data,isLoading, hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);


  return (
    <>
        <h1>Información Pókemon</h1>
        <hr />
        { isLoading 
            ? <LoadingMessage/> 
            : <PokemonCar 
                id={data.id} 
                name={data.name} 
                sprites={[
                    data.sprites.back_default,
                    data.sprites.front_default,
                    data.sprites.back_shiny,
                    data.sprites.front_shiny,
                    ]}/>}
        <button
            className="btn btn-primary mt-2"
            onClick={() =>{
                counter> 1 ? decrement() : null;
                }}>
                Anterior
        </button>
        <button
            className="btn btn-primary mt-2"
            onClick={() =>{
                increment()
                }}>
                Siguiente
        </button>
        
    </>
  );
};
