import "./index.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";

function App() {
  return (
    <TodoTemplate>
      <TodoInsert></TodoInsert>
    </TodoTemplate>
  );
}

export default App;
