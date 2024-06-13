import Spacer from '@/components/common/Spacer';
import CollectionBySeason from '@/components/sections/CollectionBySeason/CollectionBySeason';
import Hero from '@/components/sections/Hero/Hero';
import ProductByCollection from '@/components/sections/ProductByCollection/ProductByCollection';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Home = () => {
    useEffect(() => {}, []);
    return (
        <div className="mt-10 home">
            <Hero />
            <Spacer />

            <CollectionBySeason />
            <Spacer />

            <ProductByCollection title={'Bổ sung Protein'} />
            <Spacer />

            <ProductByCollection title={'Pre-workout'} />
            <Spacer />

            {/* <SectionFour /> */}
            <Spacer />
        </div>
    );
};

export default Home;
