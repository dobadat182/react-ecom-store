import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import '@splidejs/splide/css';
import './assets/styles/index.scss';

import { ClerkProvider } from '@clerk/clerk-react';
import store from './redux/store.js';
import { Provider } from 'react-redux';

// Clerk
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key');
}

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <Provider store={store}>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
            <App />
        </ClerkProvider>
    </Provider>
    // </React.StrictMode>
);
