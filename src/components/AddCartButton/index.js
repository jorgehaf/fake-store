"use client";

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

import IndexComponent from './indexComponent';

export default function AddCartButton({ product }) {
    return (
        <Provider store={store}>
            <IndexComponent product={product} />
        </Provider>
    )
}