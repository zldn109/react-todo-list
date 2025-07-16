import "./index.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoListItem from "./components/TodoListItem";
import { useState, useRef, useCallback } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const nextId = useRef(1);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos((todos) => [...todos, todo]);
    nextId.current += 1;
  });

  console.log(todos);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      {/* <TodoList></TodoList> */}
      {/* <TodoListItem></TodoListItem> */}
    </TodoTemplate>
  );
}

export default App;
