import React from 'react';
import { Button } from '../../atoms/Button/Button';
import { Product } from '../../../../features/product/types/index';
import { useAppDispatch } from '../../../../shared/hooks/redux';
import { addToCart } from '../../../../store/slices/cartSlice';

interface ProductCardProps {
    product: Product;
    onViewDetails?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
    const dispatch = useAppDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: product.id,
            quantity: 1,
        }));
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
                <img
                    src={product.img}
                    alt={product.title}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
            </div>

            <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{product.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{product.text}</p>

                <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-bold text-gray-900">{product.price}</span>
                    <div className="flex items-center">
                        <span className="text-yellow-400">★</span>
                        <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                    </div>
                </div>

                <div className="flex gap-2">
                    <Button
                        variant="primary"
                        size="sm"
                        onClick={handleAddToCart}
                        className="flex-1"
                    >
                        Add to Cart
                    </Button>
                    {onViewDetails && (
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => onViewDetails(product)}
                        >
                            View Details
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};
