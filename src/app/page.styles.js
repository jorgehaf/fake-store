import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f8f8f8;
  padding: 20px;
  border-bottom: 1px solid #ddd;
  border-radius: 4px;
`;

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

export const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  flex: 1;
`;

export const FilterContainer = styled.div`
  margin-bottom: 20px;
`;

export const CategoryFilter = styled.select`
  padding: 10px;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;



const styles = {
  Header,
  Logo,
  SearchBarContainer,
  SearchBar,
  FilterContainer,
  CategoryFilter,
};

export default styles;
