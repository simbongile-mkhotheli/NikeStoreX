import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, CartItem, AddToCartPayload } from '../../features/cart/types';

const initialState: CartState = {
    items: [],
    totalItems: 0,
    totalAmount: 0,
    isOpen: false,
    loading: false,
    error: null,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
            const { productId, quantity, size, color } = action.payload;
            const existingItem = state.items.find(
                item => item.productId === productId &&
                    item.size === size &&
                    item.color === color
            );

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                // Note: In real implementation, you'd fetch product details
                const newItem: CartItem = {
                    id: `${productId}-${size}-${color}-${Date.now()}`,
                    productId,
                    product: {} as any, // Would be populated from product data
                    quantity,
                    size,
                    color,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                };
                state.items.push(newItem);
            }

            cartSlice.caseReducers.calculateTotals(state);
        },

        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            cartSlice.caseReducers.calculateTotals(state);
        },

        updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
            const { id, quantity } = action.payload;
            const item = state.items.find(item => item.id === id);

            if (item) {
                item.quantity = quantity;
                item.updatedAt = new Date();
            }

            cartSlice.caseReducers.calculateTotals(state);
        },

        clearCart: (state) => {
            state.items = [];
            state.totalItems = 0;
            state.totalAmount = 0;
        },

        toggleCart: (state) => {
            state.isOpen = !state.isOpen;
        },

        calculateTotals: (state) => {
            state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
            // Note: Would calculate actual total amount based on product prices
            state.totalAmount = state.items.reduce((total, item) => {
                // Placeholder calculation - would use actual product price
                return total + (item.quantity * 100);
            }, 0);
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleCart,
} = cartSlice.actions;
