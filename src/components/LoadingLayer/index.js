"use client";

import React from 'react';
import styles from './styles';

export default function LoadingLayer({ params }) {
    return (
        <styles.LoadingContainer height={params.height}>
            <styles.Spinner />
        </styles.LoadingContainer>
    );
}

