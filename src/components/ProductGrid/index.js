"use client";

import React, { useState } from 'react';
import Link from 'next/link';

import styles from './styles';
import AddCartButton from '@/components/AddCartButton';
import LoadingLayer from '@/components/LoadingLayer';

export default function ProductGrid({ filteredProducts }) {
    const [loadingImage, setLoadingImage] = useState(true);
    if (!filteredProducts) return <LoadingLayer />

    return (
        <styles.Grid>
            {Array.isArray(filteredProducts) && filteredProducts.map((product) => (
                <styles.ProductCard key={product.id}>
                    <Link href={`/products/${product.id}`} passHref legacyBehavior>
                        <div>
                            <div style={{ position: 'relative' }}>
                                {loadingImage && <LoadingLayer params={{ height: '120px' }} />}
                                <styles.ProductImage
                                    src={product.image}
                                    alt={product.title}
                                    onLoad={() => setLoadingImage(false)}
                                    style={{ display: loadingImage ? 'none' : 'block' }}
                                />
                            </div>
                            <styles.ProductName>{product.title.length > 50 ? `${product.title.substring(0, 100)}...` : product.title}</styles.ProductName>
                        </div>
                    </Link>
                    <styles.CardInfoContainer>
                        <styles.ProductPrice>R$ {product.price.toFixed(2)}</styles.ProductPrice>
                        <styles.ProductDescription>
                            {product.description.length > 100 ? `${product.description.substring(0, 100)}...` : product.description}
                        </styles.ProductDescription>
                        <AddCartButton product={product} />
                    </styles.CardInfoContainer>
                </styles.ProductCard>
            ))}
        </styles.Grid>
    )
}