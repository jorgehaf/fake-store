import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f8f8f8;
  padding: 20px;
  border-bottom: 1px solid #ddd;
  border-radius: 4px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin: 0;

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    gap: 8px;
    width: 100%;
    margin-bottom: 8px;
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-left: 10px;
  flex: 1;
  
  @media (max-width: 768px) {
    padding: 10px 0 10px 0;
    margin: 0;
  }
`;

export const CategoryFilter = styled.select`
  padding: 10px;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;



const styles = {
  Header,
  Logo,
  SearchBarContainer,
  SearchBar,
  CategoryFilter,
};

export default styles;
