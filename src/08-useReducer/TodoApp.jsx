import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks/";

export const TodoApp = () => {

    const {handleNewTodo, handleDeleteTodo, onToogleTodo,todoCount, todoPending, todos} = useTodos();

  return (
    <>
        <h1>TodoApp ({todoCount()}), <small>pendientes: ({todoPending()})</small></h1>
        <hr />
        <div className="row">
            <div className="col-7">
                <TodoList todos={todos} onDeleteTodo = {handleDeleteTodo} onToogleTodo = {onToogleTodo}/>
            </div>
            <div className="col-5">
                <h4>Agregartodo</h4>
                <hr />
                <TodoAdd onNewTodo={handleNewTodo} />
            </div>
        </div>
        
    </>
  );
};
