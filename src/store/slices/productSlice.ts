import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductState, Product, ProductFilters } from '../../features/product/types';

const initialState: ProductState = {
    products: [],
    selectedProduct: null,
    filters: {},
    loading: false,
    error: null,
};

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
            state.loading = false;
            state.error = null;
        },

        setSelectedProduct: (state, action: PayloadAction<Product | null>) => {
            state.selectedProduct = action.payload;
        },

        setFilters: (state, action: PayloadAction<ProductFilters>) => {
            state.filters = { ...state.filters, ...action.payload };
        },

        clearFilters: (state) => {
            state.filters = {};
        },

        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },

        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const {
    setProducts,
    setSelectedProduct,
    setFilters,
    clearFilters,
    setLoading,
    setError,
} = productSlice.actions;
