import { createBrowserRouter } from 'react-router-dom';

// Pages
import Shop from './pages/Shop.jsx';
import Layout from './layouts/Layout.jsx';
import Home from './pages/Home.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Todo from './features/todos/todo/Todo.jsx';
import Cart from './pages/Cart.jsx';
import NotFound from './pages/NotFound.jsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '', element: <Home /> },
            { path: '/shop', element: <Shop /> },
            { path: '/todos', element: <Todo /> },
            { path: '/cart', element: <Cart /> },
            { path: '/product-detail/:id', element: <ProductDetail /> },
        ],
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);
