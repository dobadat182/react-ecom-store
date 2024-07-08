import ReactDOM from 'react-dom/client';

// Redux

// Styles
import '@splidejs/splide/css';
import './assets/styles/index.scss';

import { ClerkProvider } from '@clerk/clerk-react';

// Clerk
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key');
}

import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <Provider store={store}>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
            <App />
        </ClerkProvider>
    </Provider>
    // </React.StrictMode>
);
