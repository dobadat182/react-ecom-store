import Features from '@/pages/Features';
import Home from '@/pages/Home';
import Product from '@/pages/Product';
import Shop from '@/pages/Shop';

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

const Routers = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/todo" element={<Features />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/product" element={<Product  />} />

                    {/* <Route path="*" element={<ErrorPage />} /> */}
                </Routes>
            </Router>
        </div>
    );
};

export default Routers;
