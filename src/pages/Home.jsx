import Hero from '@/components/sections/Hero';
import CollectionBySeason from '@/components/sections/CollectionBySeason';
import ProductByCollection from '@/components/sections/ProductByCollection';
import Spacer from '@/components/common/Spacer';

import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [banners, setBanners] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get(
                    'https://dummyjson.com/products/category/mens-shirts'
                );
                setProducts(response.data.products); // Đảm bảo dữ liệu cũ không bị ghi đè
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        const getBanners = async () => {
            try {
                const response = await axios.get(
                    'https://api.unsplash.com/photos?client_id=2sNq2iBNDsC3v0avzVqAVxDFfsul-pPg0ohiHDuPcsY&per_page=4'
                );
                setBanners(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getProducts();
        getBanners();
    }, []);

    return (
        <div className="mt-10 home">
            <Hero data={banners} />
            <Spacer />

            <CollectionBySeason />
            <Spacer />

            <ProductByCollection title={'Motorcycle'} data={products} />
            <Spacer />
        </div>
    );
};

export default Home;
