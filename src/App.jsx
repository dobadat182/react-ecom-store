// Router DOM
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { useEffect } from 'react';
import WebFont from 'webfontloader';

function App() {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Lato', 'Roboto'],
            },
        });
    }, []);

    return <RouterProvider router={router} />;
}

export default App;
