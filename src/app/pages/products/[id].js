"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './products.styles';
import services from '@/app/services';

const ProductDetails = () => {
    const [product, setProduct] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            const fetchProductDetails = async () => {
                const response = await services.products.getSingleProduct(id);
                setProduct(response);
            };

            fetchProductDetails();
        }
    }, [id]);

    if (!product) {
        return <div>Carregando...</div>;
    }

    return (
        <styles.Container>
            <styles.ProductImage src={product.image} alt={product.title} />
            <styles.ProductDetails>
                <styles.ProductName>{product.title}</styles.ProductName>
                <styles.ProductPrice>R$ {product.price.toFixed(2)}</styles.ProductPrice>
                <styles.ProductDescription>{product.description}</styles.ProductDescription>
                <styles.ProductCategory>Categoria: {product.category}</styles.ProductCategory>
            </styles.ProductDetails>
        </styles.Container>
    );
};

export default ProductDetails;
