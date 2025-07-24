import TodoListItem from "./TodoListItem";
import styled from "styled-components";
import { useEffect, useRef } from "react";

const TodoListBlock = styled.ul`
  list-style: none;
  flex: 1;
  overflow-y: auto;
  overflow: scroll;
  margin-top: 8.5rem;
`;

const TodoList = ({ todos, onToggle, onRemove }) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [todos]);

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
      <div ref={bottomRef} />
    </TodoListBlock>
  );
};

export default TodoList;
