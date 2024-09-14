"use client";

import React from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

import styles from './styles';
import { addToCart } from '@/store/cartStore';

export default function ProductGrid({ filteredProducts }) {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <styles.Grid>
            {Array.isArray(filteredProducts) && filteredProducts.map((product) => (
                <styles.ProductCard key={product.id}>
                    <Link href={`/products/${product.id}`} passHref legacyBehavior>
                        <div>
                            <styles.ProductImage src={product.image} alt={product.title} />
                            <styles.ProductName>{product.title.length > 50 ? `${product.title.substring(0, 100)}...` : product.title}</styles.ProductName>
                        </div>
                    </Link>
                    <styles.CardInfoContainer>
                        <styles.ProductPrice>R$ {product.price.toFixed(2)}</styles.ProductPrice>
                        <styles.ProductDescription>
                            {product.description.length > 100 ? `${product.description.substring(0, 100)}...` : product.description}
                        </styles.ProductDescription>
                        <styles.AddToCartButton onClick={() => handleAddToCart(product)}>
                            Adicionar ao Carrinho
                        </styles.AddToCartButton>
                    </styles.CardInfoContainer>
                </styles.ProductCard>
            ))}
        </styles.Grid>
    )
}