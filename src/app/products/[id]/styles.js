import styled from 'styled-components';

const Container = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
`;

const ContainerHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between; /* Alinha os itens nos cantos opostos */
  align-items: center; /* Alinha os itens verticalmente no centro */
  margin-bottom: 20px;
  padding: 0 20px; /* Adiciona padding horizontal para espaçamento */
`;

const BackButton = styled.button`
  background-color: #e0e0e0;
  color: #333;
  border: none;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #ccc;
  }
`;

const ProductImage = styled.img`
  width: 350px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const ProductDetails = styled.div`
  max-width: 700px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const ProductName = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
`;

const ProductPrice = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: #27ae60;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 20px;
`;

const ProductCategory = styled.p`
  font-style: italic;
  color: #888;
  margin-bottom: 15px;
`;

const AddToCartButton = styled.button`
  background-color: #0070f3;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #005bb5;
  }
`;

const styles = {
  Container,
  ContainerHeader,
  BackButton,
  ProductImage,
  ProductDetails,
  ProductName,
  ProductPrice,
  ProductDescription,
  ProductCategory,
  AddToCartButton,
};

export default styles;
