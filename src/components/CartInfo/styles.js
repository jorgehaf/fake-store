import styled from 'styled-components';

export const CartInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export const CartTotal = styled.span`
  font-weight: bold;
  margin-left: 5px;
`;

const styles = {
    CartInfo,
    CartTotal,
};

export default styles;