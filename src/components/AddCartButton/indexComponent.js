"use client";

import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './styles';
import { addToCart } from '@/store/cartStore';

export default function IndexComponent({ product }) {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <styles.AddToCartButton onClick={() => handleAddToCart(product)}>
            Adicionar ao Carrinho
        </styles.AddToCartButton>
    )
}