import { PlusCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';

function AddButton({ onClick }) {
  return (
    <AddButtonWrapper>
      <IconButton onClick={onClick}>
        <PlusCircleOutlined />
      </IconButton>
    </AddButtonWrapper>
  );
}

const AddButtonWrapper = styled.div`
  text-align: center;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  outline: none;
  font-size: 2.5rem;
  curser: pointer;
`;

export default AddButton;
