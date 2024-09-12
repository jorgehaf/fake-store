"use client";

import React, { useState, useEffect } from 'react';
import styles from './pages.styles';
import services from '../services'

export default function Home() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await services.products.get();
            setProducts(response.products);
            setFilteredProducts(response.products);
        };

        fetchProducts();
    }, []);

    useEffect(() => {
        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [searchTerm, products]);

    const handleAddToCart = (product) => {
        alert(`Produto "${product.title}" adicionado ao carrinho!`);
    };

    return (
        <styles.Container>
            <styles.SearchBar
                type="text"
                placeholder="Pesquisar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <styles.Grid>
                {filteredProducts.map((product) => (
                    <styles.ProductCard key={product.id}>
                        <styles.ProductImage src={product.image} alt={product.title} />
                        <styles.ProductName>{product.title}</styles.ProductName>
                        <styles.ProductPrice>R$ {product.price.toFixed(2)}</styles.ProductPrice>
                        <styles.ProductDescription>
                            {product.description}
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