import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username:'Goku',
        email: 'goku@gmail.com'
    });

    const {username, email} = formState; 

    const onInputChange = ({target}) => {
        const {name, value} = target;        
        setformState({
            ...formState,
            [name]: value
        })        
    }

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
      <h1>Simple Form</h1>
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
       <br />
       {
        (username ==='Goku2') && <Message/>
        } 
    </>
  );
};
