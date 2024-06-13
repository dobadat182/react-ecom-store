import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Login from '@/pages/Login/Login';
import Shop from '@/pages/Shop/Shop';
import Home from '@/pages/Home/Home';

const Routers = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/shop" element={<Shop />} />

                    {/* <Route path="*" element={<ErrorPage />} /> */}
                </Routes>
            </Router>
        </div>
    );
};

export default Routers;
