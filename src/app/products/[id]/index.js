"use client";

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import styles from './styles';
import services from '@/services';

import { addToCart } from '@/store/cartStore';
import CartInfo from '@/components/CartInfo'

export default function ProductIndex({ params }) {
    const dispatch = useDispatch();

    const [product, setProduct] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await services.products.getSingleProduct(params.id);
                setProduct(response.product);
            } catch (error) {
                alert("Erro na busca pelo produto. Tente novamente!")
            }
        };

        fetchProductDetails();
    }, [params]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    if (!product) {
        return <div>Carregando...</div>;
    }

    return (
        <styles.Container>
            <styles.ContainerHeader>
                <styles.BackButton onClick={() => router.back()}>Voltar</styles.BackButton> {/* Botão de Voltar */}
                <CartInfo />
            </styles.ContainerHeader>
            <styles.ProductImage src={product.image} alt={product.title} />
            <styles.ProductDetails>
                <styles.ProductName>{product.title}</styles.ProductName>
                <styles.ProductPrice>R$ {product.price.toFixed(2)}</styles.ProductPrice>
                <styles.ProductDescription>{product.description}</styles.ProductDescription>
                <styles.ProductCategory>Categoria: {product.category}</styles.ProductCategory>
                <styles.AddToCartButton onClick={() => handleAddToCart(product)}>
                    Adicionar ao Carrinho</styles.AddToCartButton>
            </styles.ProductDetails>
        </styles.Container>
    );
};
