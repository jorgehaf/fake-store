import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #eaeaea;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const ProductName = styled.h3`
  font-size: 18px;
  margin: 0 0 10px;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #0070f3;
`;

const ProductDescription = styled.p`
  font-size: 14px;
  color: #555;
  margin: 10px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limita a duas linhas */
  -webkit-box-orient: vertical;
  line-clamp: 2; /* Propriedade moderna para fazer o truncamento */
  max-height: 3em; /* Ajuste conforme o tamanho da fonte e espaçamento de linha */
`;

const AddToCartButton = styled.button`
  padding: 10px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #005bb5;
  }
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const styles = {
  Container,
  Grid,
  ProductCard,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductDescription,
  AddToCartButton,
  SearchBar,
};

export default styles;
