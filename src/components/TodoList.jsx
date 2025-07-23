import TodoListItem from "./TodoListItem";
import styled from "styled-components";

const TodoListBlock = styled.ul`
  list-style: none;
  flex: 1;
  overflow-y: auto;
  overflow: scroll;
  margin-top: 8.5rem;
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
