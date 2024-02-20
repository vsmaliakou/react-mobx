import { observer } from "mobx-react-lite";
import todo from "./store/todo";

export const Todo = observer(() => {
  return (
    <div>
      <button onClick={() => todo.fetchTodos()}>fetch todos</button>
      {todo.todos.map(item => {
        return (
          <div key={item.id}>
            <input type="checkbox" checked={item.completed} onChange={() => todo.completeTodo(item.id)} />
            {item.title}
            <button onClick={() => todo.removeTodo(item.id)}>X</button>
          </div>
        );
      })}
    </div>
  );
});