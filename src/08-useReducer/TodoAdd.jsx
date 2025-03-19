import { useForm } from "../hooks/useForm";

export const TodoAdd = ({onNewTodo, onDeleteTodo}) => {

    const {description, onInputChange, reset} = useForm({
        description: ''
    })

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (description.length < 1) return;
        const newtodo = {
            id: new Date().getTime(),
            description: description,
            done:false
        }
        onNewTodo && onNewTodo(newtodo)
        reset();
    }
  return (
    <form onSubmit={onFormSubmit}>
        <input 
            type="text"
            placeholder="Que hay que hacer?"
            className="form-control"
            name = 'description'
            value = { description }
            onChange = { onInputChange }
            />
        <br />
        <button 
            type="submit"
            className="btn btn-primary mt-2"
            >
            Agregar
        </button>    
    </form>
  );
};
