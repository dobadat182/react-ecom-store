import Spacer from '@/components/common/Spacer';
import CollectionBySeason from '@/components/sections/CollectionBySeason/CollectionBySeason';
import Hero from '@/components/sections/Hero/Hero';
import ProductByCollection from '@/components/sections/ProductByCollection/ProductByCollection';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://dummyjson.com/products/category/motorcycle'
                );
                setProducts(response.data.products); // Đảm bảo dữ liệu cũ không bị ghi đè
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Đảm bảo chỉ gọi một lần khi component mount

    return (
        <div className="mt-10 home">
            <Hero />
            <Spacer />

            <CollectionBySeason />
            <Spacer />

            <ProductByCollection title={'Bổ sung Protein'} data={products} />
            <Spacer />

            <ProductByCollection title={'Pre-workout'} />
            <Spacer />

            {/* <SectionFour /> */}
            <Spacer />
        </div>
    );
};

export default Home;
