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
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 20px;
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

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

const ProductName = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const ProductCategory = styled.p`
  font-style: italic;
  color: #888;
  margin-bottom: 15px;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 20px;
`;

const ProductPurchase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const ProductPrice = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #27ae60;
  margin-bottom: 20px;
`;

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
  Container,
  ContainerHeader,
  BackButton,
  ProductGrid,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductCategory,
  ProductDescription,
  ProductPurchase,
  ProductPrice,
  AddToCartButton,
};

export default styles;
