import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';

// Hàm lưu trạng thái vào localStorage
const saveStateToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cart', serializedState);
    } catch (e) {
        console.warn('Could not save state', e);
    }
};

// Hàm tải trạng thái từ localStorage
const loadStateFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('cart');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        console.warn('Could not load state', e);
        return undefined;
    }
};

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    preloadedState: {
        cart: loadStateFromLocalStorage(),
    },
});

// Lắng nghe sự thay đổi trạng thái và lưu vào localStorage
store.subscribe(() => {
    saveStateToLocalStorage(store.getState().cart);
});

export default store;
