import { useEffect, useState } from "react";
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const { formState, onInputChange, reset, username, email, password } = useForm({
      username: '',
      email:'',
      password: ''
    });


     useEffect( () => {
    //     // console.log('useEffect inicial');
     },
     []
    )
    useEffect( () => {
        // console.log('useEffect FormState Change');
    },
    [formState]
    )
    useEffect( () => {
        // console.log('useEffect Email Change');
    },
    [email]
    )



  return (
    <>
      <h1>Simple Form With Custom Hook</h1>
      <hr />
      <input type="text"
        className="form-control"
        placeholder="Username"
        name = 'username'
        value={username}
        onChange= { onInputChange }
       />
      <input type="email"
        className="form-control mt-2"
        placeholder="correo@gmail.com"
        name = 'email'
        value={email}
        onChange= { onInputChange }
       />
      <input type="password"
        className="form-control mt-2"
        placeholder="password"
        name = 'password'
        value={password}
        onChange= { onInputChange }
       />
       <br />
       {
        (username ==='Goku2') && <Message/>
        } 

        <button 
          className="btn btn-primary mt2"
          onClick={reset}
          >
            Reset
        </button>
    </>
  );
};
