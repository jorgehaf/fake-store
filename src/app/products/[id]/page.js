"use client";

import ProductIndex from "./index";
import { Provider } from 'react-redux';
import { store } from '@/store/store';

const ProductDetails = ({ params }) => {
    return (
        <Provider store={store}>
            <ProductIndex params={params} />
        </Provider>
    );
};

export default ProductDetails;
