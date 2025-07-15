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
  color: var(--checkbox);
  font-size: 1.8rem;
  background: none;
`;

const TodoItemText = styled.div`
  flex: 1;
  background: var(--white);
  font-size: 1.25rem;
`;
const TodoItemRemoveButton = styled.div`
  color: var(--delete-button);
  background: var(--white);
  font-size: 1.7rem;

  &:hover {
    color: var(--delete-button-light);
  }
`;

const TodoListItem = () => {
  return (
    <TodoItemBlock>
      <TodoItemCheckbox>{<MdCheckBox />}</TodoItemCheckbox>
      <TodoItemText>안녕하시옹</TodoItemText>
      <TodoItemRemoveButton>{<MdRemoveCircleOutline />}</TodoItemRemoveButton>
    </TodoItemBlock>
  );
};

export default TodoListItem;
