import { BaseEntity } from '../../../shared/types/common';
import { Product } from '../../product/types';

export interface CartItem extends BaseEntity {
    productId: string;
    product: Product;
    quantity: number;
    size?: string;
    color?: string;
}

export interface CartState {
    items: CartItem[];
    totalItems: number;
    totalAmount: number;
    isOpen: boolean;
    loading: boolean;
    error: string | null;
}

export interface AddToCartPayload {
    productId: string;
    quantity: number;
    size?: string;
    color?: string;
}
