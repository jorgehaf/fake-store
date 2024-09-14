import styled from 'styled-components';

const AddToCartButton = styled.button`
  background-color: #444;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #222;
  }
`;

const styles = {
    AddToCartButton,
};

export default styles;
