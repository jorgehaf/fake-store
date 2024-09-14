import { render, screen, fireEvent } from '@testing-library/react';
import Page from '@/app/page';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import services from '@/services';

import CartInfo from '@/components/CartInfo';
import ProductGrid from '@/components/ProductGrid';


jest.mock('../../../src/services', () => ({
    products: {
        getProducts: jest.fn(),
        getCategory: jest.fn(),
    },
}));

describe('Page Component', () => {
    const productsMock = [
        { id: 1, title: 'Produto 1', price: 10, category: 'Categoria A', description: '' },
        { id: 2, title: 'Produto 2', price: 20, category: 'Categoria B', description: '' },
    ];

    const categoriesMock = ['Categoria A', 'Categoria B'];

    beforeEach(() => {
        services.products.getProducts.mockResolvedValue({
            products: productsMock,
        });

        services.products.getCategory.mockResolvedValue({
            categories: categoriesMock,
        });
    });

    it('Should render Pages and other components', async () => {
        render(
            <Provider store={store}>
                <Page />
            </Provider>
        );

        expect(Page).toMatchSnapshot();
        expect(CartInfo).toMatchSnapshot();
        expect(ProductGrid).toMatchSnapshot();
    });

    it('Should change the product list based on the selected category', async () => {
        render(
            <Provider store={store}>
                <Page />
            </Provider>
        );

        const categoryFilter = await screen.findByRole('combobox');
        fireEvent.change(categoryFilter, { target: { value: 'Categoria A' } });


        expect(services.products.getCategory).toHaveBeenCalledWith({ type: 'Categoria A' });

        expect(ProductGrid).toMatchSnapshot();
    });
});
