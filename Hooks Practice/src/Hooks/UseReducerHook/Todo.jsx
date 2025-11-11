import { ACTIONS } from "./UseReducerHook";
import "./Todo.css";

const Todo = ({ todo, dispatch }) => {
  return (
    <div className="todo-container">
      <span className={`todo-text ${todo.complete ? "completed" : ""}`}>
        {todo.name}
      </span>

      <div>
        <button
          className="todo-btn toggle-btn"
          onClick={() =>
            dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
          }
        >
          Toggle
        </button>

        <button
          className="todo-btn delete-btn"
          onClick={() =>
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
