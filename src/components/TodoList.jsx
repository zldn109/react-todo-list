import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, onToggle }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TodoList;
