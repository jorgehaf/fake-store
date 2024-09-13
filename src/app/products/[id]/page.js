"use client";

import React, { useEffect, useState } from 'react';
import styles from './products.styles';
import services from '@/services';

const ProductDetails = ({ params }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            const response = await services.products.getSingleProduct(params.id);
            setProduct(response.product);
        };

        fetchProductDetails();
    }, [params]);

    if (!product) {
        return <div>Carregando...</div>;
    }

    return (
        <styles.Container>
            <styles.ProductImage src={product.image} alt={product.title} />
            <styles.ProductDetails>
                <styles.ProductName>{product.title}</styles.ProductName>
                <styles.ProductPrice>R$ {product.price}</styles.ProductPrice>
                <styles.ProductDescription>{product.description}</styles.ProductDescription>
                <styles.ProductCategory>Categoria: {product.category}</styles.ProductCategory>
            </styles.ProductDetails>
        </styles.Container>
    );
};

export default ProductDetails;
