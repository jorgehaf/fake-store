"use client";

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

import IndexComponent from './indexComponent'

export default function CartInfo() {

    return (
        <Provider store={store}>
            <IndexComponent />
        </Provider>
    )
}