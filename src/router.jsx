import { createBrowserRouter } from 'react-router-dom';

// Pages
import Shop from './pages/Shop.jsx';
import Layout from './layouts/Layout.jsx';
import Home from './pages/Home.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Todo from './features/todos/todo/Todo.jsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '', element: <Home /> },
            { path: '/shop', element: <Shop /> },
            { path: '/todos', element: <Todo /> },
            { path: 'product-detail/:id', element: <ProductDetail /> },
        ],
    },
]);
