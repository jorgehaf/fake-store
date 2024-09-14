"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './styles';
import services from '@/services';

import CartInfo from '@/components/CartInfo';
import AddCartButton from '@/components/AddCartButton';
import LoadingLayer from '@/components/LoadingLayer';

export default function ProductDetails({ params }) {
    const [product, setProduct] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await services.products.getSingleProduct(params.id);
                setProduct(response.product);
            } catch (error) {
                alert("Erro na busca pelo produto. Tente novamente!");
            }
        };

        fetchProductDetails();
    }, [params]);

    if (!product) {
        return <LoadingLayer params={{ height: '100vh' }}/>;
    }

    return (
        <styles.Container>
            <styles.ContainerHeader>
                <styles.BackButton onClick={() => router.back()}>Voltar</styles.BackButton>
                <CartInfo />
            </styles.ContainerHeader>

            <styles.ProductGrid>
                <styles.ProductImage src={product.image} alt={product.title} />

                <styles.ProductInfo>
                    <styles.ProductName>{product.title}</styles.ProductName>
                    <styles.ProductCategory>Categoria: {product.category}</styles.ProductCategory>
                    <styles.ProductDescription>{product.description}</styles.ProductDescription>
                </styles.ProductInfo>

                <styles.ProductPurchase>
                    <styles.ProductPrice>R$ {product.price.toFixed(2)}</styles.ProductPrice>
                    <AddCartButton product={product} />
                </styles.ProductPurchase>
            </styles.ProductGrid>
        </styles.Container>
    );
}
