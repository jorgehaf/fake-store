"use client";

import React from 'react';
import { getCartItems, getCartTotal } from '@/store/cartStore';
import { useSelector } from 'react-redux';
import styles from './styles';

export default function CartInfo() {
    const cartItems = useSelector(getCartItems);
    const cartTotal = useSelector(getCartTotal);

    return (
        <styles.CartInfo>
            Carrinho ({cartItems.length})
            <styles.CartTotal>R$ {cartTotal.toFixed(2)}</styles.CartTotal>
        </styles.CartInfo>
    )
}