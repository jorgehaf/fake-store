import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
  padding: 20px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: contain;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const ProductName = styled.h3`
  font-size: 16px;
  margin: 10px 0;
  -webkit-line-clamp: 2;
  color: #333;
  text-decoration: none;
  cursor: pointer;
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ProductPrice = styled.p`
  color: green;
  font-weight: bold;
  margin: 5px 0;
`;

export const ProductDescription = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 10px 0;
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
  Grid,
  ProductCard,
  ProductImage,
  ProductName,
  CardInfoContainer,
  ProductPrice,
  ProductDescription,
  AddToCartButton,
};

export default styles;
