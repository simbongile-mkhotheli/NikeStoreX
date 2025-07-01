import { apiClient } from '../../../services/api/client';
import { API_ENDPOINTS } from '../../../shared/constants/routes';
import { Product, ProductFilters } from '../types';
import { ApiResponse, PaginatedResponse } from '../../../shared/types/common';

export class ProductService {
    static async getProducts(filters?: ProductFilters): Promise<PaginatedResponse<Product>> {
        const queryParams = new URLSearchParams();

        if (filters?.category) queryParams.append('category', filters.category);
        if (filters?.priceRange) {
            queryParams.append('minPrice', filters.priceRange.min.toString());
            queryParams.append('maxPrice', filters.priceRange.max.toString());
        }

        const endpoint = `${API_ENDPOINTS.PRODUCTS}?${queryParams.toString()}`;
        return apiClient.get<PaginatedResponse<Product>>(endpoint);
    }

    static async getProduct(id: string): Promise<ApiResponse<Product>> {
        return apiClient.get<ApiResponse<Product>>(`${API_ENDPOINTS.PRODUCTS}/${id}`);
    }

    static async searchProducts(query: string): Promise<PaginatedResponse<Product>> {
        return apiClient.get<PaginatedResponse<Product>>(
            `${API_ENDPOINTS.PRODUCTS}/search?q=${encodeURIComponent(query)}`
        );
    }
}
