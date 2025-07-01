import { BaseEntity } from '../../../shared/types/common';

export interface Product extends BaseEntity {
    title: string;
    text: string;
    rating: string;
    btn: string;
    img: string;
    price: string;
    color: string;
    shadow: string;
}

export interface ProductFilters {
    category?: string;
    priceRange?: {
        min: number;
        max: number;
    };
    rating?: number;
    color?: string;
}

export interface ProductState {
    products: Product[];
    selectedProduct: Product | null;
    filters: ProductFilters;
    loading: boolean;
    error: string | null;
}
