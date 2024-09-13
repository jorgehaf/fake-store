"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import styles from './page.styles';
import services from '@/services';

import { addToCart } from '@/store/cartStore';
import { getCartItems, getCartTotal } from '@/store/cartStore';

export default function Pages() {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);
  const cartTotal = useSelector(getCartTotal);

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      let response;

      if (selectedCategory) {
        response = await services.products.getCategory({
          type: selectedCategory
        });
      } else {
        response = await services.products.getProducts();
      }
      setProducts(response.products);
      setFilteredProducts(response.products);
    };

    const fetchCategories = async () => {
      const response = await services.products.getCategory();
      setCategories(response.categories);
    };

    fetchProducts();
    fetchCategories();
  }, [selectedCategory]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const searchValue = e.target.value.toLowerCase();
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchValue)
    );
    setFilteredProducts(filtered);
  };

  return (
    <styles.Container>
      <styles.SearchBarContainer>
        <styles.SearchBar
          type="text"
          placeholder="Pesquisar produtos..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <styles.CartInfo>
          Carrinho ({cartItems.length})
          <styles.CartTotal>R$ {cartTotal}</styles.CartTotal>
        </styles.CartInfo>
      </styles.SearchBarContainer>
      <styles.FilterContainer>
        <styles.CategoryFilter onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">Todas as Categorias</option>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </styles.CategoryFilter>
      </styles.FilterContainer>
      <styles.Grid>
        {Array.isArray(filteredProducts) && filteredProducts.map((product) => (
          <styles.ProductCard key={product.id}>
            <Link href={`/products/${product.id}`} passHref legacyBehavior>
              <a>
                <styles.ProductImage src={product.image} alt={product.title} />
                <styles.ProductName>{product.title}</styles.ProductName>
              </a>
            </Link>
            <styles.ProductPrice>R$ {product.price.toFixed(2)}</styles.ProductPrice>
            <styles.ProductDescription>
              {product.description.length > 100 ? `${product.description.substring(0, 100)}...` : product.description}
            </styles.ProductDescription>
            <styles.AddToCartButton onClick={() => handleAddToCart(product)}>
              Adicionar ao Carrinho
            </styles.AddToCartButton>
          </styles.ProductCard>
        ))}
      </styles.Grid>
    </styles.Container>
  );
}
