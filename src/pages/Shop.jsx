import { Button } from '@/components/ui/button';
import { ProductCard } from '@/features/products';
import { getProducts } from '@/services/api';
import { useEffect, useState } from 'react';

const Shop = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await getProducts();
                setProducts(response.data);
                console.log(products);
            } catch (error) {
                setError('Failed to load products.');
            } finally {
                setLoading(false);
                console.log(products);
            }
        };
        fetchProducts();
    }, []);

    console.log(products);

    return (
        <div className="container px-5 shop-page">
            <div className="row">
                <h1 className="mb-10 text-4xl font-extrabold tracking-tight text-center mt-14 scroll-m-20 lg:text-5xl">
                    Shop Page
                </h1>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-8 md:gap-y-10">
                    {products.products?.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>

                <div className="flex items-center justify-center m-10">
                    <Button variant="outline">Xem thêm</Button>
                </div>
            </div>
        </div>
    );
};

export default Shop;
