import "./index.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoListItem from "./components/TodoListItem";

function App() {
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoListItem></TodoListItem>
    </TodoTemplate>
  );
}

export default App;
