import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putTodo } from "../application/actions/todos";
import { pageLoaded } from "../application/actions/ui";
import { getTodos } from "../application/selectors/todos";
import { getLoading } from "../application/selectors/ui";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);
  const loading = useSelector(getLoading);

  useEffect(() => {
    dispatch(pageLoaded);
  }, [dispatch]);

  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      <h1>Essential Todos</h1>
      {loading ? (
        "Loading todos..."
      ) : (
        <div>
          {todos.map((todo) => (
            <p
              key={todo.id}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
                margin: 0,
              }}
              onClick={() =>
                dispatch(putTodo({ ...todo, completed: !todo.completed }))
              }
            >
              {capitalizeFirst(todo.title)}
            </p>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
