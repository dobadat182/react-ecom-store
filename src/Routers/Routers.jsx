import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home, Login, Products } from '@/pages';

const Routers = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/shop" element={<Products />} />

                    <Route path="/products/:productId" />
                    {/* <Route path="*" element={<ErrorPage />} /> */}
                </Routes>
            </Router>
        </div>
    );
};

export default Routers;
