import { TodoItem } from "./TodoItem";

export const TodoList = ({todos, onDeleteTodo, onToogleTodo}) => {
  return (
    <ul className="list-group">
                    {
                        todos.map( todo => (
                            <TodoItem todo={todo} key={todo.id} onDeleteTodo = {onDeleteTodo} onToogleTodo = {onToogleTodo}/>
                        ))
                    }
                </ul>
  );
};
