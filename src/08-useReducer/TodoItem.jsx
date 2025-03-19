import { Check, X } from "lucide-react";

export const TodoItem = ({todo, onDeleteTodo, onToogleTodo}) => {
    return <li key={todo.id} className="list-group-item d-flex justify-content-between"> 
    <span className={`align-self-center ${(todo.done)  ? 'text-decoration-line-through' : ''}`} > {todo.description} </span> 
    <button 
        className="btn btn-danger"
        onClick={() => onDeleteTodo(todo.id)}
    >Borrar
    </button>     
    <button
        onClick={() => onToogleTodo(todo.id)}
        className={`btn btn-${todo.done ? 'success' : 'danger'} rounded-circle d-flex align-items-center justify-content-center`}
        style={{ width: "40px", height: "40px" }}
        >
            {todo.done ? <Check size={82}/> : <X size={82}/>}
    </button>
</li>                            ;
};
