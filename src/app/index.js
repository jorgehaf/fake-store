"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.styles";
import services from "@/services";

import CartInfo from "@/components/CartInfo";
import ProductGrid from "@/components/ProductGrid";

export default function Page() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      let response;

      try {
        if (selectedCategory) {
          response = await services.products.getCategory({
            type: selectedCategory,
          });
        } else {
          response = await services.products.getProducts();
        }
      } catch (error) {
        alert("Erro na busca pelos produtos. Tente novamente!");
      }
      setProducts(response.products);
      setFilteredProducts(response.products);
    };

    const fetchCategories = async () => {
      try {
        const response = await services.products.getCategory();
        setCategories(response.categories);
      } catch (error) {
        alert("Erro na busca pelas categorias. Tente novamente!");
      }
    };

    fetchProducts();
    fetchCategories();
  }, [selectedCategory]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const searchValue = e.target.value.toLowerCase();
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchValue)
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      <styles.Header>
        <styles.Logo>Fake Store</styles.Logo>
        <styles.SearchBarContainer>
          <styles.SearchBar
            id="search-bar"
            type="text"
            placeholder="Pesquisar produtos..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <styles.CategoryFilter
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Todas as Categorias</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </styles.CategoryFilter>
        </styles.SearchBarContainer>
        <CartInfo />
      </styles.Header>
      <ProductGrid filteredProducts={filteredProducts} />
    </>
  );
}
