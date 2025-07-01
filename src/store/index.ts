import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { cartSlice } from './slices/cartSlice';
import { productSlice } from './slices/productSlice';
import { uiSlice } from './slices/uiSlice';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'], // Only persist cart state
};
const persistedCartReducer = persistReducer(persistConfig, cartSlice.reducer);
export const store = configureStore({
    reducer: {
    cart: persistedCartReducer,
        products: productSlice.reducer,
        ui: uiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
            },
        }),
    devTools: import.meta.env.MODE !== 'production',
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
