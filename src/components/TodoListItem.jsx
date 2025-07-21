import styled from "styled-components";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 1.5rem;
  background: var(--white);
  gap: 1rem;
`;

const TodoItemCheckbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  font-size: 2rem;
  color: var(--checkbox);

  svg {
    background: none;
    padding: 0;
    margin: 0;
    display: block;
  }
`;

const TodoItemText = styled.div`
  flex: 1;
  background: var(--white);
  font-size: 1.25rem;
  color: ${(props) => (props.checked ? "var(--text-light)" : "var(--black)")};
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
`;

const TodoItemRemoveButton = styled.div`
  color: var(--delete-button);
  background: none;
  font-size: 2rem;

  &:hover {
    color: var(--delete-button-light);
  }

  svg {
    background: none;
    padding: 0;
    margin: 0;
    display: block;
  }
`;

const TodoListItem = ({ todo, onToggle, onRemove }) => {
  return (
    <TodoItemBlock onClick={() => onToggle(todo.id)}>
      <TodoItemCheckbox>
        {todo.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </TodoItemCheckbox>
      <TodoItemText checked={todo.checked}>{todo.text}</TodoItemText>
      <TodoItemRemoveButton onClick={() => onRemove(todo.id)}>
        <MdRemoveCircleOutline />
      </TodoItemRemoveButton>
    </TodoItemBlock>
  );
};

export default TodoListItem;
