import { Suspense, lazy } from 'react';

// Sử dụng lazy load cho các component
const Hero = lazy(() => import('@/components/sections/Hero'));
const CollectionBySeason = lazy(
    () => import('@/components/sections/CollectionBySeason')
);
const ProductByCollection = lazy(
    () => import('@/components/sections/ProductByCollection')
);
const Spacer = lazy(() => import('@/components/common/Spacer'));

import axios from 'axios';
import { useEffect, useState } from 'react';
import { getProductsByCategory } from '@/services/api';

const Home = () => {
    const [motorcycleProducts, setMotorcycleProducts] = useState([]);
    const [mensShirtsProducts, setMensShirtsProducts] = useState([]);
    const [menShoesProducts, setMenShoesProducts] = useState([]);

    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getBanners = async () => {
            try {
                const response = await axios.get(
                    'https://api.unsplash.com/photos?client_id=2sNq2iBNDsC3v0avzVqAVxDFfsul-pPg0ohiHDuPcsY&per_page=4'
                );

                setTimeout(() => {
                    setLoading(true);
                }, 2000);

                setBanners(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        const fetchProducts = async () => {
            setLoading(true);
            setError(null);

            try {
                const [motorcycle, mensShirts, menShoes] = await Promise.all([
                    getProductsByCategory('motorcycle'),
                    getProductsByCategory('mens-shirts'),
                    getProductsByCategory('mens-shoes'),
                ]);

                setMotorcycleProducts(motorcycle);
                setMensShirtsProducts(mensShirts);
                setMenShoesProducts(menShoes);
            } catch (error) {
                setError('Failed to load products.');
            } finally {
                setLoading(false);
            }
        };

        getBanners();
        fetchProducts();
    }, []);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="mt-10 home">
                {error && <div>{error}</div>}

                <Hero data={banners} loading={loading} />
                <Spacer />

                <CollectionBySeason />
                <Spacer />

                <ProductByCollection
                    title={'Motorcycle'}
                    data={motorcycleProducts}
                />
                <Spacer />

                <ProductByCollection
                    title={"Men's Shirts"}
                    data={mensShirtsProducts}
                />
                <Spacer />

                <ProductByCollection
                    title={"Men's Shoes"}
                    data={menShoesProducts}
                />
                <Spacer />
            </div>
        </Suspense>
    );
};

export default Home;
