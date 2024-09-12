import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ProductImage = styled.img`
  width: 300px;
  height: auto;
  margin-bottom: 20px;
`;

const ProductDetails = styled.div`
  max-width: 600px;
  text-align: center;
`;

const ProductName = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 20px;
  color: green;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  margin-bottom: 10px;
`;

const ProductCategory = styled.p`
  font-style: italic;
  color: #555;
`;

const styles = {
    Container,
    ProductImage,
    ProductDetails,
    ProductName,
    ProductPrice,
    ProductDescription,
    ProductCategory,
};

export default styles;
