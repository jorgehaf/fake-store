import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin-right: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
`;

export const FilterContainer = styled.div`
  margin-bottom: 20px;
`;

export const CategoryFilter = styled.select`
  padding: 10px;
  width: 100%;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const styles = {
  Container,
  SearchBarContainer,
  SearchBar,
  FilterContainer,
  CategoryFilter,
};

export default styles;
