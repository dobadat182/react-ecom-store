import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Shop from '@/pages/Shop';
import { Home, Todo } from '@/pages';

const Routers = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/todo" element={<Todo />} />
                    <Route path="/shop" element={<Shop />} />

                    {/* <Route path="*" element={<ErrorPage />} /> */}
                </Routes>
            </Router>
        </div>
    );
};

export default Routers;
