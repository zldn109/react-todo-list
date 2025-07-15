import styled from "styled-components";
import { MdAdd } from "react-icons/md";

const TodoInsertBlock = styled.div`
  display: flex;
`;

const TodoInput = styled.input`
  flex: 1;
  font-size: 1.4rem;
  padding: 0.5rem 0.7rem;
  border: none;
  outline: none;
  background: var(--input);
  color: var(--white);

  &::placeholder {
    color: var(--input-placeholder);
  }
`;

const TodoAddButton = styled.button`
  background: var(--add-button);
  color: var(--white);
  width: 4.2rem;
  height: 3.5rem;
  border: none;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    background: var(--add-button-light);
  }
`;

const TodoInsert = () => {
  return (
    <TodoInsertBlock>
      <TodoInput placeholder="할 일을 입력하세요" />
      <TodoAddButton>
        <MdAdd />
      </TodoAddButton>
    </TodoInsertBlock>
  );
};

export default TodoInsert;
