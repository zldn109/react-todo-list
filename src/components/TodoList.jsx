import TodoListItem from "./TodoListItem";
import styled from "styled-components";

const TodoListBlock = styled.ul`
  padding-top: 8.5rem;
  list-style: none;
`;

const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </TodoListBlock>
  );
};

export default TodoList;
